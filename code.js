document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const clipboard = (text) => {
      navigator.clipboard.writeText(text);
    };

    const agentname = data.agentname;
    const name = data.name;
    const mnp = data.mnp;
    const callback = data.callback;
    const dealercode = data.dealercode;
    const issue = data.issue;
    const ownership = data.ownership;
    const imei = data.imei;
    const eid = data.eid;
    const email = data.email;
    const address = data.address;
    const resolution = data.resolution;
    const notes = data.notes;

    const tocopy = `Agent name: ${agentname}\nName: ${name}\nMNP: ${mnp}\nCall back: ${callback}\nDealer code: ${dealercode}\n\nIssue: ${issue}\n\nOwnership: ${ownership}\nIMEI: ${imei}\nEID: ${eid}\nEmail: ${email}\n\nAddress: ${address}\n\nResolution: ${resolution}\n\nNotes: ${notes}`;

    if (
      agentname === '' ||
      name === '' ||
      mnp === '' ||
      issue === '' ||
      resolution === ''
    ) {
      alert('You mush need to complete the require fill');
    }

    clipboard(tocopy);
    const tols = [{ note: btoa(tocopy), data: new Date() }];

    if (localStorage.getItem('data') === null) {
      localStorage.setItem('data', JSON.stringify(tols));
    }
    if (localStorage.getItem('data') !== null) {
      const ls = localStorage.getItem('data');
      const addtols = [...JSON.parse(ls), ...tols];
      localStorage.setItem('data', JSON.stringify(addtols));
    }

    const ls = JSON.parse(localStorage.getItem('data'));

    ls.map((item) => {
      console.log({ note: atob(item.note), data: item.date });
    });
  });
});
