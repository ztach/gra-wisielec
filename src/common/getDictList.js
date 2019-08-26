export default function getDictList(p,f){
    const dane = p+f;
    fetch(dane)
      .then(response => response.json())
      .then(data => {
        return data;
    })
    .catch(err => {
      console.log("Error Reading data " + err);
    });
}

export let dane;
