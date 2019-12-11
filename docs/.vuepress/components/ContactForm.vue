<template>
  <form @submit.prevent="onSubmit" class="contact">
    <label>
      <h3>First Name <span class="required">*</span></h3>
      <input v-model="firstName" type="text" required />
    </label>
    <label>
      <h3>Last Name</h3>
      <input v-model="lastName" type="text" />
    </label>
    <label>
      <h3>Email <span class="required">*</span></h3>
      <input v-model="email" type="email" />
    </label>
    <label>
      <h3>Organization / Affiliation Name</h3>
      <input v-model="organizationName" type="text" />
    </label>
    <label>
      <h3>Which of the following do you identify most closely with?</h3>
      <select v-model="profession">
        <option value="" selected="" disabled=""></option>
        <option value="it-professional">IT Professional</option>
        <option value="computational-chemist">Computational Chemist</option>
        <option value="structural-biologist">Structural Biologist</option>
        <option value="medicinal-chemist">Medicinal Chemist</option>
        <option value="crystallographer">Crystallographer</option>
        <option value="protein-engineer">Protein Engineer</option>
        <option value="educator">Educator</option>
        <option value="student">Student</option>
        <option value="press">Press</option>
        <option value="blockchain-enthusiast">Blockchain Enthusiast</option>
        <option value="government-employee">Government Employee</option>
        <option value="philanthropist">Philanthropist</option>
        <option value="other">Other</option>
      </select>
    </label>
    <label>
      <h3>How did you hear about Nanome?</h3>
      <select v-model="referer" name="referer">
        <option value="" selected="" disabled=""></option>
        <option value="facebook">Facebook</option>
        <option value="twitter">Twitter</option>
        <option value="instagram">Instagram</option>
        <option value="reddit">Reddit</option>
        <option value="linkedIn">LinkedIn</option>
        <option value="medium">Medium</option>
        <option value="friend">Friend</option>
        <option value="conference">Conference</option>
        <option value="digital-publication">Digital Publication</option>
        <option value="other">Other</option>
      </select>
    </label>
    <label>
      <h3>I'm interested in... <span class="required">*</span></h3>
      <textarea v-model="content" cols="30" rows="10"></textarea>
    </label>
    <button type="submit">
      <h3>Send</h3>
    </button>
  </form>
</template>

<script>
export default {
  data: () => ({
    firstName: "",
    lastName: "",
    email: "",
    organizationName: "",
    profession: "",
    referer: "",
    content: "",

    success: true
  }),

  methods: {
    async onSubmit() {
      const url = "https://nanome.zendesk.com/api/v2/requests.json";

      const request = this.buildRequest();

      const body = JSON.stringify({ request });

      console.log(body);

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        mode: "no-cors",
        body
      });

      console.log(res);

      if (res.status !== 200) {
        console.error("An error occurred processing your request");
        return;
      }

      this.success = true;
    },

    buildRequest() {
      const requester = {};
      let subject = "";
      const comment = {
        body: ""
      };

      requester.name = this.firstName;
      if (this.lastName) {
        requester.name += " " + this.lastName;
      }

      subject = `${requester.name} is interested in Nanome`;

      requester.email = this.email;

      if (this.organizationName) {
        comment.body += `Organization / Affiliation Name: ${this.organizationName}`;
      }

      if (this.profession) {
        comment.body += `Profession: ${this.profession}`;
      }

      if (this.referer) {
        comment.body += `Referer: ${this.referer}`;
      }

      comment.body += `Message: ${this.content}`;

      return {
        requester,
        subject,
        comment
      };
    }
  }
};
</script>

<style scoped>
.contact label {
  display: block;
  margin-bottom: 1rem;
}

.contact h3 {
  margin: 0;
  margin-bottom: 0.25rem;
}

.contact input,
.contact textarea,
.contact select {
  display: block;
  width: 100%;
  font-size: 1.1rem;
  padding: 0.5rem;
  border: 1px solid #2c3e508a;
  box-sizing: border-box;
}

.contact span.required {
  color: #f04040;
}

.contact button {
  width: 100%;
  padding: 0.5rem;
  background: #2c3e50;
  color: white;
  border: 0;
  cursor: pointer;
}

.contact button h3 {
  margin-bottom: 0;
}
</style>