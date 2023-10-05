import { toBlob } from 'html-to-image';
import pkg from 'file-saver';
const { saveAs } = pkg;

export function saveCard(card: any) {
	toBlob(card, { style: { gap: "0px" } }).then(blob => {
		if (blob) {
			saveAs(blob, 'card.png')
		}		
	})
}