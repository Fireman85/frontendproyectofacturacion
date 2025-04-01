<template>
    <div class="container">
        <div class="row mt-4">
            <div class="col-12">
                <div class="border border-gray rounded shadow p-2 pt-3">
                    <h2 class="text-primary">Categorias <button @click="mostrarForm = !mostrarForm" type="button" class="btn btn-primary btn-sm ">Nuevo <i class="bi bi-plus"></i></button></h2>
                </div>
                <div v-if="mostrarForm" class="border border-gray shadow rounded mt-3 p-2">
                    <div class="col-12">
                            <div class="border m-2 p-2">
                                <div class="row">
                                    <div class="col-12 text-center">
                                        <label for="exampleFormControlTextarea1" class="form-label text-primary text-center">Registro de categorias</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 col-md-4 col-lg-4 mb-3">
                                        <input v-model="categoria.nombre" type="text" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Nombre de la categoria" />
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
                                    <th scope="col" class="text-center text-primary">Id</th>
                                    <th scope="col" class="text-center text-primary">Nombre de la categoria</th>

                                </tr>
                            </thead>
                            <tbody>
                                <!-- <tr>
                                    <td class="d-flex justify-content-center align-items-center">
                                        <div class="btn-group btn-group-sm" role="group" aria-label="Basic outlined example" style="text-align: center;">
                                            <button type="button" class="btn btn-outline-warning"><i class="bi bi-pencil"></i></button>
                                            <button type="button" class="btn btn-outline-danger"><i class="bi bi-trash"></i></button>
                                        </div>
                                    </td>
                                    <td class="text-center">1</td>
                                    <td class="text-center">Juegos de mesa</td>
                                </tr> -->
                                <tr v-for="categoria in categorias" key="categoria.id">
                                    <td class="d-flex justify-content-center align-items-center">
                                        <div class="btn-group btn-group-sm" role="group" aria-label="Basic outlined example" style="text-align: center;">
                                            <button type="button" class="btn btn-outline-warning"><i class="bi bi-pencil"></i></button>
                                            <button type="button" class="btn btn-outline-danger"><i class="bi bi-trash"></i></button>
                                        </div>
                                    </td>
                                    <td class="text-center">{{ categoria.id }} </td>
                                    <td class="text-center">{{ categoria.nombre }} </td>
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
    name: 'Categorias',
    data (){
        return {
            mostrarForm: false,
            categorias: [],
            categoria: {
                id: null,
                nombre: ''
            }
        }
    },
    methods: {
        async fetchData() {
            try {
                const response = await this.$axios.get('categorias/')
                console.log('response es ', response)
                this.categorias = response.data
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        },
        guardarProducto() {
            this.$axios.post('categorias/', 
                this.categoria
            ).then(response => {
                this.fetchData()
                this.limpiarCategoria()
                alert('Se guardó con éxito')
            }).catch(error => {
                console.log('Error al guardar datos', error)
            })
        },
        limpiarCategoria() {
            this.categoria = {
                id: null,
                nombre: ''
            }
        }
    },
    created (){
        this.fetchData()
    }
}
</script>

<style scoped>

</style>