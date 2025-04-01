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
                                    <div class="col-12 text-center">
                                        <label for="exampleFormControlTextarea1" class="form-label text-primary text-center">Registro de productos</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 col-md-4 col-lg-4 mb-3">
                                        <input type="text" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Producto" />
                                    </div>
                                    <div class="col-sm-12 col-md-4 col-lg-4 mb-3">
                                        <select class="form-select text-primary border-primary" placeholder="Categoria">
                                            <option value="">categoria 1</option>
                                            <option value="">categoria 1</option>
                                        </select>
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
                                        <div class="col-12"><button type="button" class="btn btn-primary btn-sm">Guardar <i class="bi bi-floppy"></i> </button></div>
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
                                    <th scope="col" class="text-center text-primary">Producto</th>
                                    <th scope="col" class="text-center text-primary">Categoria</th>
                                    <th scope="col" class="text-center text-primary">Existencia</th>
                                    <th scope="col" class="text-center text-primary">Valor unitario venta</th>
                                    <th scope="col" class="text-center text-primary">Valor unitario compra</th>

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
                                    <td>Camiseta</td>
                                    <td>Ropa</td>
                                    <td>2</td>
                                    <td>1000</td>
                                    <td>950</td>
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
            mostrarForm: false
        }
    }
}
</script>

<style scoped>

</style>