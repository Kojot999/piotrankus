export type Dictionary = {
  components: {
    header: {
      home: string;
      projects: string;
      skills: string;
      resume: string;
      contact: string;
    };
    footer: {
      message: string;
    };
    home: {
      header: string;
      text: string;
      button: string;
    };
    projects: {
      header: string;
      text: string;
    };
    skills: {
      header: string;
      text: string;
    };
    resume: {
      header: string;
      text: string;
    };
    contact: {
      header: string;
      text: string;
      email: string;
      form: string;
      formContent: {
        name: string;
        email: string;
        message: string;
        button: string;
      };
    };
  };
};
