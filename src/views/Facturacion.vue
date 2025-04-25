<template>
    <div class="container">
        <div class="row mt-4">
            <div class="col-12">
                <div class="border border-gray rounded shadow p-2 pt-3">
                    <h2 class="text-primary">Facturacion <button @click="mostrarForm = !mostrarForm" type="button" class="btn btn-primary btn-sm ">Nuevo <i class="bi bi-plus"></i></button></h2>
                </div>
                <div v-if="mostrarForm" class="border border-gray shadow rounded mt-3 p-2">
                    <div class="col-12">
                            <div class="border m-2 p-2">
                                <div class="row">
                                    <div class="col-12 text-center" style="margin-bottom: 0.5em;">
                                        <label for="exampleFormControlTextarea1" class="form-label text-primary text-center">Registro de productos</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 col-md-4 col-lg-4 mb-3">
                                        <select v-model="facturacion.persona" class="form-select text-primary border-primary">
                                            <option v-for="persona in listaPersonas" :key="persona.id" :value="persona.id">{{persona.nombres}}</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-12 col-md-4 col-lg-4 mb-3">
                                        <select v-model="facturacion.compania" class="form-select text-primary border-primary">
                                            <option v-for="compania in listaCompanias" :key="compania.id" :value="compania.id">{{compania.nombre}}</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-12 col-md-4 col-lg-4 mb-3">
                                        <select v-model="facturacion.termino" class="form-select text-primary border-primary">
                                            <option v-for="termino in listaTerminos" :key="termino.id" :value="termino.id">{{termino.nombre}}</option>
                                        </select>
                                    </div>
                                </div>
                                
                                
                            </div>
                    </div>
                    <div class="row">
                        <p>
                            <button @click="agregarProducto" type="button" class="btn btn-secondary btn-sm ">Agregar producto</button>
                        </p>
                        
                        <div class="col-12">
                            <table class="table table-striped border rounded shadow">
                                <thead>
                                    <tr>
                                        <th scope="col" class="text-center text-primary">Acciones</th>
                                        <th scope="col" class="text-center text-primary">Producto</th>
                                        <th scope="col" class="text-center text-primary">Cantidad</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, index) in facturacion.factura_productos" :key="index">
                                        <td class="d-flex justify-content-center align-items-center">
                                            <div class="btn-group btn-group-sm" role="group" aria-label="Basic outlined example" style="text-align: center;">
                                                <button @click="quitarProducto(index)" type="button" class="btn btn-outline-danger"><i class="bi bi-trash"></i></button>
                                            </div>
                                        </td>
                                        <td>
                                            <select v-model="item.producto" class="form-select text-primary border-primary">
                                                <option v-for="producto in listaProductos" :key="producto.id" :value="producto.id">{{producto.nombre}}</option>
                                            </select>
                                        </td>
                                        <td>
                                            <input v-model="item.cantidad" type="number" class="form-control border-primary" placeholder="Cantidad" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="text-center mb-3">
                        <div class="row">
                            <div class="col-12"><button @click="guardarFactura" type="button" class="btn btn-primary btn-sm">Guardar <i class="bi bi-floppy"></i> </button></div>
                        </div>
                    
                    </div>
                </div>
                <div class="border border-gray rounded shadow mt-3 p-2">
                    <div class="row">
                      <div class="col-12 ml-2 p-5">
                        <table class="table table-striped border rounded shadow">
                            <thead>
                                <tr>
                                    <th scope="col" class="text-center text-primary">Acciones</th>
                                    <th scope="col" class="text-center text-primary">Id</th>
                                    <th scope="col" class="text-center text-primary">Persona</th>
                                    <th scope="col" class="text-center text-primary">Compañia</th>
                                    <th scope="col" class="text-center text-primary">Termino</th>
                                    <th scope="col" class="text-center text-primary">Detalle de venta</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in arrayFacturacion">
                                    <td class="d-flex justify-content-center align-items-center">
                                        <div class="btn-group btn-group-sm" role="group" aria-label="Basic outlined example" style="text-align: center;">
                                            <button type="button" class="btn btn-outline-warning"><i class="bi bi-pencil"></i></button>
                                            <button type="button" class="btn btn-outline-danger"><i class="bi bi-trash"></i></button>
                                        </div>
                                    </td>
                                    <th scope="row">{{item.id}}</th>
                                    <td>{{item.nombre_persona}}</td>
                                    <td>{{item.nombre_compania}}</td>
                                    <td>{{item.nombre_termino}}</td>
                                    <td>
                                        <ul>
                                            <li v-for="detalle in item.factura_productos" :key="detalle.producto">{{detalle.nombre_producto}} - Cantidad: {{detalle.cantidad}}</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                        <!-- 
                            
                        </div> -->
                  </div>
                </div>
                
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Facturacion',
    data (){
        return {
            mostrarForm: false,
            facturacion: {
                id: null,
                persona: 0,
                compania: 0,
                termino: 0,
                factura_productos: []
            },
            listaPersonas: [],
            listaCompanias: [],
            listaTerminos: [],
            arrayFacturacion: [],
            listaProductos: []
        }
    },
    methods: {
        quitarProducto(indice) {
            // usando el indice se elimina el objeto del array
            this.facturacion.factura_productos.splice(indice, 1)
        },
        agregarProducto() {
            this.facturacion.factura_productos.push({
                producto: null,
                cantidad: 0
            })
        },
        listarProductos() {
            this.$axios.get('productos/')
            .then(response => {
                this.listaProductos = response.data
            }).catch(error => {
                console.log('Error en la consulta de categorias ', error)
            })
        },
        listarFacturas() {
            this.$axios.get('factura/')
            .then(response => {
                this.arrayFacturacion = response.data
            }).catch(error => {
                console.log('Error en la consulta de categorias ', error)
            })
        }, 
        listarPersonas () {
            this.$axios.get('personas/')
            .then(response => {
                this.listaPersonas = response.data
            }).catch(error => {
                console.log('Error en la consulta de personas ', error)
            })

        },
        listarCompanias () {
            this.$axios.get('compania/')
            .then(response => {
                this.listaCompanias = response.data
            }).catch(error => {
                console.log('Error en la consulta de personas ', error)
            })

        },
        listarTerminos () {
            this.$axios.get('terminos/')
            .then(response => {
                this.listaTerminos = response.data
            }).catch(error => {
                console.log('Error en la consulta de terminos ', error)
            })

        },
        guardarFactura() {
            this.$axios.post('factura/', this.facturacion)
            .then(response => {

                this.listarFacturas()
                alert('Se guardó con éxito')
                this.facturacion = {
                    id: null,
                    persona: 0,
                    compania: 0,
                    termino: 0,
                    factura_productos: []
                }
            }).catch(error => {
                console.log('Error al guardar factura ', error)
            })
        }
    },
    created () {
        this.listarFacturas()
        this.listarPersonas()
        this.listarCompanias()
        this.listarTerminos()
        this.listarProductos()
    }
}
</script>

<style scoped>

</style>