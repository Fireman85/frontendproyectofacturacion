<template>
    <div class="container">
        <div class="row mt-4">
            <div class="col-12">
                <div class="border border-gray rounded shadow p-2 pt-3">
                    <h2 class="text-primary">Personas <button @click="mostrarForm = !mostrarForm" type="button" class="btn btn-primary btn-sm ">Nueva <i class="bi bi-plus"></i></button></h2>
                </div>
                <div v-if="mostrarForm" class="border border-gray shadow rounded mt-3 p-2">
                    <div class="col-12">
                            <div class="border m-2 p-2">
                                <div class="row">
                                    <div class="col-12 text-center">
                                        <label for="exampleFormControlTextarea1" class="form-label text-primary text-center">Registro de personas</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 col-md-4 col-lg-4 mb-3">
                                        <input type="text" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Identificación" />
                                    </div>
                                    <div class="col-sm-12 col-md-4 col-lg-4 mb-3">
                                        <input type="text" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Nombres" />
                                    </div>
                                    <div class="col-sm-12 col-md-4 col-lg-4 mb-3">
                                        <input type="text" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Dirección" />
                                    </div>
                                </div>
                                <div class="row">
                                   
                                    <div class="col-sm-12 col-md-4 col-lg-4 mb-3">
                                        <input type="text" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Ciudad" />
                                    </div>
                                    <div class="col-sm-12 col-md-4 col-lg-4 mb-3">
                                        <input type="text" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Código postal" />
                                    </div>
                                    <div class="col-sm-12 col-md-4 col-lg-4 mb-3">
                                        <input type="text" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Teléfono" />
                                    </div>
                                </div>
                                <div class="row">
                                    
                                    <div class="col-sm-12 col-md-4 col-lg-4 mb-3">
                                        <input type="text" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Correo electrónico" />
                                    </div>
                                </div>
                                
                                <div class="text-center mb-3">
                                    <div class="row">
                                        <div class="col-12"><button type="button" class="btn btn-primary btn-sm">Guardar <i class="bi bi-floppy"></i></button></div>
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
                                    <th scope="col" class="text-center">Acciones</th>
                                    <th scope="col">Id</th>
                                    <th scope="col">Nombres</th>
                                    <th scope="col">Dirección</th>
                                    <th scope="col">Ciudad</th>
                                    <th scope="col">Codigo postal</th>
                                    <th scope="col">Teléfono</th>
                                    <th scope="col">Correo</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="d-flex justify-content-center align-items-center">
                                        <div class="btn-group btn-group-sm" role="group" aria-label="Basic outlined example" style="text-align: center;">
                                            <button type="button" class="btn btn-outline-warning"><i class="bi bi-pencil"></i></button>
                                            <button type="button" class="btn btn-outline-danger"><i class="bi bi-trash"></i></button>
                                        </div>
                                    </td>
                                    <th scope="row">1</th>
                                    <td>Mark alejandro</td>
                                    <td>Calle 45</td>
                                    <td>Medellin</td>
                                    <td>045</td>
                                    <td>605555555</td>
                                    <th scope="col">any@micorreo.com</th>
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
    name: 'Personas',
    data (){
        return {
            mostrarForm: false
        }
    }
}
</script>
<style scoped>
h2{
   font-size: 1.2em;
}
</style>