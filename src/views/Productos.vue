<template>
    <div class="container">
        <div class="row mt-4">
            <div class="col-12">
                <div class="border border-gray rounded shadow p-2 pt-3">
                    <h2 class="text-primary">Productos <button @click="mostrarForm = !mostrarForm" type="button" class="btn btn-primary btn-sm ">Nuevo <i class="bi bi-plus"></i></button></h2>
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
                                        <input v-model="producto.nombre" type="text" class="form-control border-primary" id="exampleFormControlTextarea1" rows="3" placeholder="Nombre" />
                                    </div>
                                    <div class="col-sm-12 col-md-4 col-lg-4 mb-3">
                                        <select v-model="producto.categoria" class="form-select text-primary border-primary">
                                            <option v-for="categoria in arrayCategorias" :key="categoria.id" :value="categoria.id">{{categoria.nombre}}</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-12 col-md-4 col-lg-4 mb-3">
                                        <input v-model="producto.existencia" type="number" class="form-control border-primary" id="exampleFormControlTextarea1" rows="3" placeholder="Existencia" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 col-md-4 col-lg-4 mb-3">
                                        <input  v-model="producto.valor_unitario_venta" type="text" class="form-control border-primary" id="exampleFormControlTextarea1" rows="3" placeholder="Valor unitario venta" />
                                    </div>
                                    <div class="col-sm-12 col-md-4 col-lg-4 mb-3">
                                        <input v-model="producto.valor_unitario_compra" type="text" class="form-control border-primary" id="exampleFormControlTextarea1" rows="3" placeholder="Valor unitario compra" />
                                    </div>
                                </div>
                                
                                <div class="text-center mb-3">
                                    <div class="row">
                                        <div class="col-12"><button @click="guardarProducto" type="button" class="btn btn-primary btn-sm">Guardar <i class="bi bi-floppy"></i> </button></div>
                                    </div>
                                
                                </div>
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
                                    <!-- <th scope="col" class="text-center text-primary">Id</th> -->
                                    <th scope="col" class="text-center text-primary">Nombre</th>
                                    <th scope="col" class="text-center text-primary">Categoria</th>
                                    <th scope="col" class="text-center text-primary">Existencia</th>
                                    <th scope="col" class="text-center text-primary">Valor unitario venta</th>
                                    <th scope="col" class="text-center text-primary">Valor unitario compra</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="producto in arrayProductos" :key="producto.id">
                                    <td class="d-flex justify-content-center align-items-center">
                                        <div class="btn-group btn-group-sm" role="group" aria-label="Basic outlined example" style="text-align: center;">
                                            <button type="button" class="btn btn-outline-warning"><i class="bi bi-pencil"></i></button>
                                            <button type="button" class="btn btn-outline-danger"><i class="bi bi-trash"></i></button>
                                        </div>
                                    </td>
                                    <!-- <th scope="row">{{producto.id}}</th> -->
                                    <td>{{producto.nombre}}</td>
                                    <td>{{producto.nombre_categoria}}</td>
                                    <td>{{producto.existencia}}</td>
                                    <td>{{producto.valor_unitario_venta}}</td>
                                    <td>{{producto.valor_unitario_compra}}</td>
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
    name: 'Productos',
    data (){
        return {
            mostrarForm: false,
            arrayCategorias: [],
            arrayProductos: [],
            producto: {
                categoria: null,
                nombre: null,
                existencia: null,
                valor_unitario_venta: null,
                valor_unitario_compra: null
            }
        }
    },
    methods: {
        listarCategorias() {
            this.$axios.get('categorias/')
            .then(response => {
                this.arrayCategorias = response.data
            })
            .catch(error => {
                console.log(error)
            })
        },
        listarProductos() {
            this.$axios.get('productos/')
            .then(response => {
                this.arrayProductos = response.data
            })
            .catch(error => {
                console.log(error)
            })
        },
        guardarProducto (){
            this.$axios.post('productos/', this.producto)
            .then(response => {
                this.listarProductos()
                alert('¡ Producto guardado con éxito !')
                this.producto = {
                    categoria: null,
                    nombre: null,
                    existencia: null,
                    valor_unitario_venta: null,
                    valor_unitario_compra: null
                }
            })
            .catch(error => {
                console.log(error)
            })
        }
    },
    created () {
        this.listarCategorias()
        this.listarProductos()
    }
}
</script>

<style scoped>

</style>