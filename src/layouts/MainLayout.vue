<template>
<div class="main">
    <header>
        <nav class="navbar navbar-expand-lg bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
                </a>
                <RouterLink to="/" class="navbar-brand"> SoftDrogueria</RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <!-- <li class="nav-item">
                        <RouterLink to="/" class="nav-link"> <i class="bi bi-house"></i> Inicio</RouterLink>
                        </li> -->
                        <li class="nav-item">
                            <RouterLink to="/productos" :class="['nav-link', active === 'productos' ? 'active' : '']"> <i class="bi bi-list-stars"></i> Productos</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/personas" :class="['nav-link', active === 'personas' ? 'active' : '']"> <i class="bi bi-person"></i> Personas</RouterLink>
                        </li>
                                    
                        <li class="nav-item">
                            <RouterLink to="/facturacion" :class="['nav-link', active === 'facturacion' ? 'active' : '']">  <i class="bi bi-receipt"></i> Facturación</RouterLink>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bi bi-gear"></i> Configuración
                            </a>
                            <ul class="dropdown-menu bg-primary">
                                <!-- <RouterLink @click="selectedLink('companias')" to="/companias" :class="['nav-link', active === 'companias' ? 'active' : '']">  <i class="bi bi-building"></i> Compañias</RouterLink> -->
                                <!-- <li><a @click="selectedLink('')" class="dropdown-item text-white" href="#"><i class="bi bi-building"></i> Compañias</a></li> -->
                                <!-- <li><a @click="selectedLink('')" class="dropdown-item text-white" href="#"><i class="bi bi-wallet2"></i> Termino de pago</a></li> -->
                                <!-- <li><a @click="selectedLink('')" class="dropdown-item" href="#"> <i class="bi bi-basket"></i> Categorias</a></li> -->
                                <RouterLink to="/compania" class="dropdown-item text-white">  <i class="bi bi-building"></i> Compañias</RouterLink>
                                <RouterLink to="/terminos-de-pago" class="dropdown-item text-white">  <i class="bi bi-wallet2"></i> Termino de pago</RouterLink>
                                <RouterLink to="/categorias" class="dropdown-item text-white">  <i class="bi bi-basket"></i> Categorias</RouterLink>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <div class="container">
        <main>
            <RouterView />
        </main>
            
    </div>
        
    <footer class="text-white text-center py-3">
        <div class="container">
            <p class="mb-1">© 2024 SoftDrogueria. Todos los derechos reservados.</p>
            <p class="small mb-0">
                <a href="#!" class="text-white text-decoration-none mx-2">Política de Privacidad</a> |
                <a href="#!" class="text-white text-decoration-none mx-2">Términos de Uso</a> |
                <a href="#!" class="text-white text-decoration-none mx-2">Contacto</a>
            </p>
        </div>
    </footer>
    </div>

</template>

<script>

</script>

<style scoped>

</style>