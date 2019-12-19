const sharp = require("sharp");
const fs = require("fs");

const assetDir = __dirname + "/public/assets/original";
const compressedDir = __dirname + "/public/assets/compressed";

const regex = {
  file: /^(.+)\.(.+)$/
};

(async () => {
  console.log("Compressing images");

  // Get all dirs
  const dirs = await getDirs(assetDir);

  // Loop through all dirs
  dirs.forEach(async dir => {
    const files = await getFiles(`${assetDir}/${dir}`);

    if (!fs.existsSync(`${compressedDir}/${dir}`)) {
      fs.mkdirSync(`${compressedDir}/${dir}`);
    }

    // Loop through all files in dir
    files.forEach(async file => {
      const match = file.match(regex.file);
      const fileName = match[1];
      const format = match[2];

      if (format !== "gif") {
        let image = await sharp(`${assetDir}/${dir}/${file}`);
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

          // console.log(
          //   `Compressing: "/${dir}/${file}" (${data.width}x${data.height}) -> "/${dir}/${fileName}" (${width}x${height})`
          // );
        }

        await image
          .toFormat("jpeg")
          .toFile(`${compressedDir}/${dir}/${fileName}.jpg`);
      } else {
        await fs.copyFileSync(
          `${assetDir}/${dir}/${fileName}.gif`,
          `${compressedDir}/${dir}/${fileName}.gif`
        );
      }
    });
  });

  console.log("Done compressing images!");
})();

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
