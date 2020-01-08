const sharp = require("sharp");
const imagemin = require("imagemin");
const imageminGifsicle = require("imagemin-gifsicle");
const fs = require("fs");

const assetDir = __dirname + "/public/assets/original";
const compressedDir = __dirname + "/public/assets/compressed";

const regex = {
  file: /^(.+)\.(.+)$/
};

(async function() {
  console.log("Compressing images and gifs");
  await recursiveCompress("");
  console.log("Done compressing");
})();

async function recursiveCompress(dir) {
  await compressDir(dir);

  const dirs = await getDirs(`${assetDir}/${dir}`);

  if (!fs.existsSync(compressedDir)) {
    fs.mkdirSync(compressedDir);
  }

  for (let i = 0; i < dirs.length; i++) {
    await recursiveCompress(`${dir}/${dirs[i]}`);
  }
}

async function compressDir(dir) {
  // Check if directory exists in compressed folder. If not, make it
  if (!fs.existsSync(`${compressedDir}/${dir}`)) {
    fs.mkdirSync(`${compressedDir}/${dir}`);
  }

  if (dir) {
    console.log(`Compressing all images and gifs in ${dir}`);
  }

  // Compress gifs
  await imagemin([`docs/.vuepress/public/assets/original/${dir}/*.gif`], {
    destination: `docs/.vuepress/public/assets/compressed/${dir}`,
    plugins: [
      imageminGifsicle({
        optimizationLevel: 3,
        colors: 128
      })
    ]
  });

  const files = await getFiles(`${assetDir}/${dir}`);

  // Loop through all files in dir
  for (let i = 0; i < files.length; i++) {
    const match = files[i].match(regex.file);
    const fileName = match[1];
    const format = match[2];

    // If file type is a match
    if (/^(png|jpg|jpeg|)$/.test(format.toLowerCase())) {
      let image = await sharp(`${assetDir}/${dir}/${files[i]}`);
      const data = await image.metadata();

      // If needs to be compressed
      let { width, height } = data;
      if (width > 450) {
        const ratio = 450 / width;
        width *= ratio;
        height *= ratio;
      }
      if (height > 450) {
        const ratio = 450 / height;
        width *= ratio;
        height *= ratio;
      }

      // Convert from float to int
      width = parseInt(width);
      height = parseInt(height);

      // If needs resizing
      if (width < data.width || height < data.height) {
        image = await image.resize(width, height);
      }

      await image
        .toFormat("jpeg")
        .toFile(`${compressedDir}/${dir}/${fileName}.jpg`);
    }
  }
}

function getDirs(dirname) {
  return fs
    .readdirSync(dirname, {
      withFileTypes: true
    })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
}

function getFiles(dirname) {
  return fs
    .readdirSync(dirname, {
      withFileTypes: true
    })
    .filter(dirent => !dirent.isDirectory())
    .map(dirent => dirent.name);
}
