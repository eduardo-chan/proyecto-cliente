<template>
    <div class="form-container">
        <h2>Formulario de Registro</h2>
        <form @submit.prevent="submitForm" class="form">
            <div class="form-group">
                <label for="nombres">Nombre(s):</label>
                <input type="text" id="nombres" v-model="nombres" required>
            </div>
            <div class="form-group">
                <label for="apellidoPaterno">Apellido Paterno:</label>
                <input type="text" id="apellidoPaterno" v-model="apellidoPaterno" required>
            </div>
            <div class="form-group">
                <label for="apellidoMaterno">Apellido Materno:</label>
                <input type="text" id="apellidoMaterno" v-model="apellidoMaterno">
            </div>
            <div class="form-group">
                <label for="cp">Código Postal:</label>
                <input type="text" id="cp" v-model="direccion.cp" required>
            </div>
            <div class="form-group">
                <label for="calle">Calle:</label>
                <input type="text" id="calle" v-model="direccion.calle" required>
            </div>
            <div class="form-group">
                <label for="numero">Número:</label>
                <input type="text" id="numero" v-model="direccion.numero" required>
            </div>
            <div class="form-group">
                <label for="ciudad">Ciudad:</label>
                <input type="text" id="ciudad" v-model="direccion.ciudad" required>
            </div>
            <div class="form-group">
                <label for="fechaNacimiento">Fecha de Nacimiento:</label>
                <input type="date" id="fechaNacimiento" v-model="fechaNacimiento" :max="maxFechaNacimiento" required>
            </div>
            <div class="form-group">
                <label for="email">Correo Electrónico:</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <div class="form-group">
                <label for="telefono">Número Telefónico:</label>
                <input type="tel" id="telefono" v-model="telefono" required>
            </div>
            <div class="form-group">
                <label for="foto">Fotografía (PNG):</label>
                <input type="file" id="foto" accept="image/png" @change="handleFileUpload" required>
            </div>
            <button type="submit">Enviar</button>
            <div v-if="formError" class="error-message">{{ formError }}</div>
        </form>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            nombres: '',
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
            formError: ''
        };
    },
    computed: {
        maxFechaNacimiento() {
            const today = new Date();
            const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
            return maxDate.toISOString().split('T')[0];
        }
    },
    methods: {
        submitForm() {
            if (this.isValidForm()) {
                //envío de datos
                alert('Formulario enviado correctamente.');
                this.formError = ''; // se reinicia el msj de error
            } else {
                this.formError = alert('Formulario no enviado, por favor verifica los datos.');
            }
        },
        isValidForm() {
            if (
                !this.nombres.trim() ||
                !this.apellidoPaterno.trim() ||
                !this.direccion.cp.trim() ||
                !this.direccion.calle.trim() ||
                !this.direccion.numero.trim() ||
                !this.direccion.ciudad.trim() ||
                !this.fechaNacimiento ||
                !this.email.trim() ||
                !this.telefono.trim()
            ) {
                return false;
            }

            //validar email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.email)) {
                return false;
            }

            //validar teléfono
            if (this.telefono.length !== 10) {
                return false;
            }

            //validar tamaño de la foto
            if (this.foto && this.foto.size > 3 * 1024 * 1024) {
                return false;
            }

            return true;
        },
        handleFileUpload(event) {
            const file = event.target.files[0];
            if (file) {
                this.foto = file;
            }
        }
    }
};
</script>
  
<style scoped>
.form-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.form {
    display: flex;
    flex-direction: column;
}

.form-group {
    margin-bottom: 15px;
}

label {
    font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="date"],
button,
.error-message {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}

.error-message {
    margin-top: 10px;
    background-color: #ffcccc;
    color: #cc0000;
    padding: 8px;
    border-radius: 5px;
}
</style>
  