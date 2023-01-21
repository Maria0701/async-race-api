import { createChooserRow } from "./chooserRow";
import { createColorInput, createNameInput } from "./createInputs";
import { createUpdateBtn } from "./createUpdateBTn";

export const createSecondRow = () => {
  const chooserRow2 = createChooserRow();
  chooserRow2.append(createNameInput(true));
  chooserRow2.append(createColorInput(true));
  const updateBtn = createUpdateBtn();
  chooserRow2.append(updateBtn);
  return chooserRow2;
}