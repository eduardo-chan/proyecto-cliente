<template>
    <div>
        <h2>Formulario</h2>
        <!-- //es para que no se recargue la pagina -->
        <form @submit.prevent="submitForm">
            <label for="nombre">Nombre Completo:</label>
            <input type="text" id="nombre" v-model="nombre" placeholder="Nombre" required>
            <input type="text" id="apellidoPaterno" v-model="apellidoPaterno" placeholder="Apellido Paterno" required>
            <input type="text" id="apellidoMaterno" v-model="apellidoMaterno" placeholder="Apellido Materno">
            <!-- //span v-if es para que se muestre el error -->
            <span v-if="errors.nombre" class="error">{{ errors.nombre }}</span>
            <span v-if="errors.apellidoPaterno" class="error">{{ errors.apellidoPaterno }}</span>
            <span v-if="errors.apellidoMaterno" class="error">{{ errors.apellidoMaterno }}</span>
            <br>

            <label for="direccion">Dirección:</label>
            <!-- //v-model es para que se guarde en el data -->
            <input type="text" id="direccion" v-model="direccion.cp" placeholder="Código Postal" required>
            <input type="text" v-model="direccion.calle" placeholder="Calle" required>
            <input type="text" v-model="direccion.numero" placeholder="Número" required>
            <input type="text" v-model="direccion.ciudad" placeholder="Ciudad" required>
            <span v-if="errors.direccion" class="error">{{ errors.direccion }}</span>
            <br>

            <label for="fechaNacimiento">Fecha de Nacimiento:</label>
            <input type="date" id="fechaNacimiento" v-model="fechaNacimiento" :max="maxDate" required>
            <span v-if="errors.fechaNacimiento" class="error">{{ errors.fechaNacimiento }}</span>
            <br>

            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" v-model="email" required>
            <span v-if="errors.email" class="error">{{ errors.email }}</span>
            <br>

            <label for="telefono">Número Telefónico:</label>
            <input type="tel" id="telefono" v-model="telefono" maxlength="10" required>
            <span v-if="errors.telefono" class="error">{{ errors.telefono }}</span>
            <br>

            <label for="foto">Fotografía (PNG):</label>
            <input type="file" id="foto" @change="handleFileUpload" accept="image/png" required>
            <span v-if="errors.foto" class="error">{{ errors.foto }}</span>
            <br>

            <button type="submit">Enviar</button>
        </form>
    </div>
</template>
  
<script>
export default {
    //exporta el data con los valores que se van a ingresar
    data() {
        return {
            nombre: '',
            apellidoPaterno: '',
            apellidoMaterno: '',
            direccion: {
                cp: '',
                calle: '',
                numero: '',
                ciudad: ''
            },
            fechaNacimiento: '',
            email: '',
            telefono: '',
            foto: null,
            maxDate: new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split('T')[0],
            errors: {}
        };
    },
    //methods es para validar los datos
    methods: {
        //submitForm es para que se envie el formulario
        submitForm() {
            this.errors = {}; //resetear los errores antes de la validación
            let hasErrors = false;

            // Validar los campos del formulario, en este caso es nombre, trim es para que no se envie espacios
            if (!this.nombre.trim()) {
                this.errors.nombre = "el nombre es obligatorio";
                hasErrors = true;
            }
            //Validar apellido paterno
            if (!this.apellidoPaterno.trim()) {
                this.errors.apellidoPaterno = "el apellido paterno es obligatorio";
                hasErrors = true;
            }
            //Validar direccion
            if (!this.direccion.cp.trim() || !this.direccion.calle.trim() || !this.direccion.numero.trim() || !this.direccion.ciudad.trim()) {
                this.errors.direccion = "todos los campos de la dirección son obligatorios";
                hasErrors = true;
            }

            //validar numero de direccion
            if (isNaN(this.direccion.numero)) {
                this.errors.direccion = "el número solo debe contener dígitos";
                hasErrors = true;
            }

            // Validar fecha de nacimiento
            const fechaNacimiento = new Date(this.fechaNacimiento);
            const limiteEdad = new Date();
            //restar 18 años a la fecha actual
            limiteEdad.setFullYear(limiteEdad.getFullYear() - 18);

            if (!this.fechaNacimiento || fechaNacimiento >= new Date() || fechaNacimiento > limiteEdad) {
                this.errors.fechaNacimiento = "La fecha de nacimiento debe ser válida y corresponder a una persona mayor de 18 años";
                hasErrors = true;
            }

            //validar email
            if (!this.email.trim() || !this.emailIsValid(this.email)) {
                this.errors.email = "Correo electrónico no válido";
                hasErrors = true;
            }
            //validar telefono
            if (!this.telefono.trim() || this.telefono.length !== 10) {
                this.errors.telefono = "Número telefónico no válido";
                hasErrors = true;
            }
            if (isNaN(this.telefono)) {
                this.errors.telefono = "El número telefónico debe contener solo dígitos";
                hasErrors = true;
            }

            if (!this.foto) {
                this.errors.foto = "la imagen es obligatoria";
                hasErrors = true;
            }

            //hasErrors es para, si hay errores no se envie el formulario
            if (hasErrors) {
                alert('Por favor, corrige los errores en el formulario.');
                return;
            }

            // Si no hay errores, se envia
            alert('Formulario enviado correctamente.');
        },
        //handleFileUpload es para que se suba la foto
        handleFileUpload(event) {
            const file = event.target.files[0];
            // Validar que el archivo sea una imagen PNG y que no exceda los 3MB, aqui los mb se convierten en bytes
            if (file && file.type === 'image/png' && file.size < 3000000) {
                this.foto = file;
            } else {
                event.target.value = ''; // limpia el valor del input file si no cumple con los requisitos
                this.foto = null;
                this.errors.foto = 'selecciona un archivo PNG menor a 3MB.';
            }
        },
        //una función de validación de email, verifica si
        //cumple con el formato de dirección de correo electrónico básico.
        emailIsValid(email) {
            //expresión regular para validar email
            return /\S+@\S+\.\S+/.test(email);
            //test es para que se cumpla la expresión regular
        }
    }
};
</script>
  
<style>
form {
    margin-top: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
}

/* es para que se vea el input de color blanco */
input[type="text"],
input[type="date"],
input[type="email"],
input[type="tel"],
input[type="file"],
button {
    margin-bottom: 10px;
}

.error {
    color: red;
    font-size: 0.8em;
}
</style>
  