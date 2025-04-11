<template>
    <div class="container">
        <div class="row mt-4">
            <div class="col-12">
                <div class="border border-gray rounded shadow p-2 pt-3">
                    <h2 class="text-primary">Terminos de pago <button @click="mostrarFormulario" type="button" class="btn btn-primary btn-sm ">  {{ mostrarForm === true ? 'Cerrar'  : 'Nuevo' }} <i class="bi bi-plus"></i></button></h2>
                </div>
                <div v-if="mostrarForm" class="border border-gray shadow rounded mt-3 p-2">
                    <div class="col-12">
                            <div class="border m-2 p-2">
                                <div class="row">
                                    <div class="col-12 text-center">
                                        <label for="exampleFormControlTextarea1" class="form-label text-primary text-center">Registro de Terminos de pago</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 col-md-4 col-lg-4 mb-3">
                                        <input type="text" v-model="termino.nombre" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Nombre del termino de pago" />
                                    </div>
                                </div>
                                <div class="text-center mb-3">
                                    <div class="row">
                                        <div class="col-6"><button @click="guardarTerminoDePago" type="button" class="btn btn-primary btn-sm">Guardar <i class="bi bi-floppy"></i> </button></div>
                                        <div class="col-6"><button @click="cancelarEdicion" type="button" class="btn btn-primary btn-sm">Cancelar <i class="bi bi-x"></i> </button></div>
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
                                    <th scope="col" class="text-center text-primary">Nombre del termino de pago</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="termino in terminosArray" key="termino.id">
                                    <td class="d-flex justify-content-center align-items-center">
                                        <div class="btn-group btn-group-sm" role="group" aria-label="Basic outlined example" style="text-align: center;">
                                            <button @click="editarTermino(termino)" type="button" class="btn btn-outline-warning"><i class="bi bi-pencil"></i></button>
                                            <button @click="borrarTermino(termino)" type="button" class="btn btn-outline-danger"><i class="bi bi-trash"></i></button>
                                        </div>
                                    </td>
                                    <td class="text-center">{{ termino.id }}</td>
                                    <td class="text-center">{{ termino.nombre }}</td>
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
    name: 'Terminos',
    data () {
        return {
            mostrarForm: false,
            terminosArray: [],
            termino: {
                id: null,
                nombre: ''
            },
            esModificar: false
        }
    },
    methods: {
        mostrarFormulario () {
          this.mostrarForm = !this.mostrarForm
        },
        async obtenerTerminosDePago() {
            try {
                const response = await this.$axios.get('terminos/')
                console.log(response)
                this.terminosArray = response.data
                console.log('terminosArray es ', this.terminosArray)
            } catch (error) {
                console.error(error)
            }
        },
        async guardarTerminoDePago () {
            try {
                let response
                if (this.esModificar === false) {
                    response = await this.$axios.post('terminos/', this.termino)
                } else {
                    response = await this.$axios.put('terminos/'+ this.termino.id +'/', this.termino)
                }
                                
                console.log('response es ', response)
                if (response) {
                    this.obtenerTerminosDePago()
                    this.termino.nombre = ''
                    this.esModificar = false
                    alert('Termino de pago guardado con éxito!')
                }
            } catch (error) {
                console.error(error)
            }
        },
        editarTermino (terminoaEditar) {
            this.mostrarForm = true
            this.termino = terminoaEditar
            this.esModificar = true
        },
        cancelarEdicion () {
            this.esModificar = false
            this.mostrarForm = false
            this.termino = {
                id: null,
                name: ''
            }
        },
        async borrarTermino (terminoABorrar){
            const result = confirm(`Vas a borrar el termino llamado: '${terminoABorrar.nombre}' ¿ Estas seguro ? `)
            if (result) {
                const response = await this.$axios.delete('terminos/'+ terminoABorrar.id + '/')
                if (response){
                    this.obtenerTerminosDePago()
                    alert('Registro eliminado con éxito')
                    
                }
            }
        }
        
    },
    created (){
        // Listar los terminos de pago de la base de datos
        this.obtenerTerminosDePago()
    }
}
</script>

<style scoped>

</style>