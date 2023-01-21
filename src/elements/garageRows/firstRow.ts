import { createHandler } from "../../controllers/createCarHandler";
import { createBtn } from "./createCreateBtn";
import { createChooserRow } from "./chooserRow";
import { createColorInput, createNameInput } from "./createInputs";

export const createFirstRow = () => {
    const chooserRow1 = createChooserRow();
    chooserRow1.append(createNameInput(false));
    chooserRow1.append(createColorInput(false));
    const createdBtn = createBtn();
    chooserRow1.append(createdBtn);
    
    createdBtn.addEventListener('click', createHandler);

    return chooserRow1;
}