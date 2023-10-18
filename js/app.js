// export const cargarDatos = () => {

// 	const xhr = new XMLHttpRequest();


// 	xhr.open('GET', '../data/datos.txt', true);

// 	xhr.onreadystatechange = () => {
// 		// console.log(`Estado ${xhr.readyState}`);

// 		if (xhr.readyState === 4 && xhr.status === 200) {
// 			// console.log(xhr.responseText);
// 			document.getElementById(
// 				'listado'
// 			).innerHTML = `<h1>${xhr.responseText}</h1>`;
// 		}
// 	};

// 	xhr.send();
// };