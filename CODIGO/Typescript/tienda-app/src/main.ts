import { Product } from './clases/Product';
import './style.css'
/*
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
   <h1> Saludos desde el MainTS</h1>
   <form id="loginForm">
    <section>
    <label>Nombre de usuario</label>
    <input type="text" id="username" name="name" placeholder="Ingresa tu nombre de usuario">
    </section>
    <section>
    <label>Password</label>
    <input type="password" id="pasword" name="password" placeholder="Ingresa tu password">
    </section>
    <button type="submit">Iniciar Sesion</button>
    </form>
  </div>
`
*/
//document.querySelector<HTMLElement>('#parrafo')!.innerText = "Texto creado desde el p"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>

   <h1> Gestion de Tienda </h1>
   
   <form id="formProduct">

    <section>
    <label>Nombre de Producto</label>
    <input type="text" id="nombre" name="nombre" placeholder="Ingresa el nombre del producto">
    </section>

    <section>
    <label>Precio</label>
    <input type="text" id="precio" name="precio" placeholder="Ingresa su precio">
    </section>

    <section>
    <label>Cantidad</label>
    <input type="text" id="cantidad" name="cantidad" placeholder="Ingresa su cantidad">
    </section>
   
    <button type="submit">Agregar producto</button>
    </form>

  </div>
`

const form = document.getElementById("formProduct") as HTMLFormElement;

form.addEventListener('submit', (e:SubmitEvent) => {
  e.preventDefault();
  console.log("Bienvenido a nuestra app");

    const id = Date.now();
    const name = (document.getElementById('nombre') as HTMLInputElement).value;
    const price = parseFloat((document.getElementById('precio') as HTMLInputElement).value);
    const quanty = parseInt((document.getElementById('cantidad') as HTMLInputElement).value);
  
    console.log(name);
    console.log(price);
    console.log(quanty);
    console.log(id);

    let producto = new Product(id,name,price,quanty)
    console.log(producto);
  
    localStorage.setItem('products',JSON.stringify(producto));
})