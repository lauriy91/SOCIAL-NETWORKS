<template>
    <div class="login">
    <!-- Usamos la etiqueta form para indicarle a nuestro código la construcción de un formulario -->
    <form class="form">
        <h2 class="form_title">Inicia Sesión</h2>
        <p class="form_parragraph">¿Aún no tienes cuenta? <a href="#" class="form_link">Entra aquí</a></p>

        <div class="form_container">
            <div class="form_group">
                <input type="text" id="name" class="form_input" placeholder=" ">
                <label for="name" class="form_label"> Nombre: </label>
                <span class="form_line"></span>
            </div>
            <div class="form_group">
                <input type="text" id="user" class="form_input" placeholder=" ">
                <label for="user" class="form_label"> Usuario: </label>
                <span class="form_line"></span>
            </div>
            <div class="form_group">
                <input type="password" id="password" class="form_input" placeholder=" ">
                <label for="password" class="form_label"> Contraseña: </label>
                <span class="form_line"></span>
            </div>

            <input type="submit" class="form_submit" value="Entrar">
            <label class="forgot_password"> <a href="#" class="form_link">Olvidé Contraseña</a></label>
        </div>
    </form>
    </div>
</template>

<script>

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,700;1,300;1,400&display=swap');

*{
    margin-left:10%;
    padding:0;
    box-sizing: border-box;
}

.login{
    font-family: 'Roboto', sans-serif;
    background: linear-gradient( rgb(221, 6, 132), rgb(126, 13, 136), rgb(112, 2, 155));
    background-position: 0 0, 10px 10 px;
    display: flex;
    min-height: 100vh;
}

.form{
    background-color: white;
    margin: auto;
    width: 90%;
    max-width: 400px;
    padding: 4.5em 3em;
    border-radius: 10px;
    /* con el rgb le doy colores a la sombra y el /con el porcentaje es su nivel de transparencia */
    box-shadow: 0 5px 10px -5px rgb(0,0,0 / 30%);
    text-align: center;
}

.form_title{
    font-size: 2.2rem;
    margin-bottom: .5em;
}

.form_paragraph{
    font-weight: 300;
}

.form_link{
    font-weight: 400;
    color: rgba(2, 39, 246, 0.685);
}

.form_container{
    margin-top: 3em;
    display: grid;
}

.form_group{
    position: relative;
    margin-top: 1rem;
    --color: rgb(77, 74, 77);
}

.form_input{
    width: 100%;
    background: none;
    color: dimgray;
    font-size: 1rem;
    padding: .6em .3em;
    border:none;
    outline: none;
    border-bottom: 1px solid var(--color);
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.form_input:focus, 
.form_input:not(:placeholder-shown){
    color: #0a0a0a;
}

.form_input:focus + .form_label,
.form_input:not(:placeholder-shown)+ .form_label{
    transform: translateY(-12px) scale(.7);
    transform-origin: left-top;
    color: rgb(231, 209, 238);
}

.form_label{
    color: var(--color);
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 5px;
    transform: translateY(10px);
    transition: transform .5, color .3s;
}

.form_submit{
    margin-top: 3rem;
    background: steelblue;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    padding: .8em 0;
    border:none;
    border-radius: .5em;
}

.form_line{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1;
    background-color: turquoise;
    transform: scale(0);
    transform: left bottom;
    transition: transform .4s;
}

.forgot_password{
    margin-top: 1rem;
}

.form_input:focus ~ .form_line,
.form_input:not(:placeholder-shown)~ .form_line{
    transform: scale(1);
}

@media (max-width:425px) {

    .form_title{
        font-size: 1.8rem;
    }
    
}
</style>
