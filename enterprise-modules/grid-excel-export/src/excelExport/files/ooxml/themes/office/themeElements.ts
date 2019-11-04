import { ExcelOOXMLTemplate } from '@ag-grid-community/grid-core';
import colorScheme from './colorScheme';
import fontScheme from './fontScheme';
import formatScheme from './formatScheme';

const themeElements: ExcelOOXMLTemplate = {
    getTemplate() {

        return {
            name: "a:themeElements",
            children: [
                colorScheme.getTemplate(),
                fontScheme.getTemplate(),
                formatScheme.getTemplate()
            ]
        };
    }
};

export default themeElements;
