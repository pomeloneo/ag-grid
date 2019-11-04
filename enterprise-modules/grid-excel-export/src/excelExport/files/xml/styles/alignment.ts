import { XmlElement } from '@ag-grid-community/grid-core';
import { ExcelStyle, ExcelXMLTemplate } from '@ag-grid-community/grid-core';

const alignment: ExcelXMLTemplate = {
    getTemplate(styleProperties: ExcelStyle): XmlElement {
        const {
            vertical,
            horizontal,
            indent,
            readingOrder,
            rotate,
            shrinkToFit,
            verticalText,
            wrapText
        } = styleProperties.alignment;
        return {
            name: 'Alignment',
            properties: {
                prefixedAttributes:[{
                    prefix: "ss:",
                    map: {
                        Vertical: vertical,
                        Horizontal: horizontal,
                        Indent: indent,
                        ReadingOrder: readingOrder,
                        Rotate: rotate,
                        ShrinkToFit: shrinkToFit,
                        VerticalText:verticalText,
                        WrapText: wrapText
                    }
                }]
            }
        };
    }
};

export default alignment;
