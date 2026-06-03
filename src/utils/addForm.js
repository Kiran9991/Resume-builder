export function addform(formArray, setForm) {
  setForm((prev) => {
    const newId =
      formArray.length > 0 ? formArray[formArray.length - 1] + 1 : 1;
    return [...prev, { id: newId }];
  });
}

export function deleteForm(formArray, setForm, id) {
  setForm([...formArray.filter((ele) => ele.id != id)]);
}
