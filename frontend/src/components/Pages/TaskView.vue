<template>

  <div class="container">
    <h2 v-if="!taskEditId">Nova Tarefa</h2>
    <h2 v-else >Editar Tarefa</h2>
    <br>

    <div class="card">

      <div class="card-header" v-if="!taskEditId"><b>Preencha os dados para registrar:</b></div> 

        <div class="card-header" v-else><b>Preencha os dados para editar:</b></div> 

          <div class="row justify-content-center card-body">

          <div class="col-md-8">

            <div class="row">
            <!--Buttons of the forms - INI-->
              <div class="col-md-12">

                <div class="form-group">

                <label for="task_name">*Nome:</label>

                <input type="text" id="task_name" v-model="formData.task_name" class="form-control" required>

                </div>

              </div>

              <div class="col-md-12">

                <div class="form-group">

                  <label for="task_desc">Descrição:</label>

                  <textarea class="form-control" id="task_desc" v-model="formData.task_desc" rows="3" ></textarea>

                </div>

              </div>

              <div class="col-md-12">

                <div class="form-group" v-if="typeof formData.task_end !== 'undefined' ">

                  <label for="task_end">{{formData.task_end}}:</label>

                  <select class="form-control" id="task_end" v-model="formData.task_end">
                    <option :value="true" :selected="formData.task_end === true">Concluída</option>
                    <option :value="false" :selected="formData.task_end === false">Pendente</option>
                  </select>

                </div>

              </div>

            </div>

            <!--Buttons of the forms - END-->
            <br>
            <div class="row">

              <div class="col-md-4 offset-md-4 text-center">

                <ButtonLink link="/"  label="Retornar" style="margin-right: 10px;" color="dark"/>

                <ButtonInput :label="taskEditId ? 'Editar' : 'Salvar'" @click="save"/>

              </div>

            </div>

        </div>
 
      </div>

    </div>
  </div>


</template>
<script>
import axios from 'axios';
import { BACKEND_URL } from '/configAmbiente';
import ButtonLink from '@/components/Structure/ButtonLink.vue'; 
import ButtonInput from '@/components/Structure/ButtonInput.vue'; 


export default {
  components: {
    ButtonLink,
    ButtonInput
  },
  data() {
    return {
      formData: {
        task_id:       '',
        task_name:     '',
        task_end:      '',
        task_desc:     '',
      },
      tasks: [],
      type: 'tasks',
      taskEditId: ''
    };
  },
  mounted() {
    this.taskEditId = this.$route.params.taskId;
    this.tasks = this.search(this.taskEditId);
  },
  methods: {
    search(taskEditId){
      //Função que busca uma tarefa com base em seu ID
      axios.get(BACKEND_URL+this.type+"/"+taskEditId, {
      })
        .then(response => {
          if(response.status == 200){ 
            /* Carregando os valores nos campos */
            this.formData.task_id   = response.data.task_id;
            this.formData.task_name = response.data.task_name;
            this.formData.task_end  = response.data.task_end;
            this.formData.task_desc = response.data.task_desc;
          }
        })
        .catch(error => {
          this.errorMessage = error.response.tasks;
          if(this.errorMessage == undefined){

          } else {
            alert('Atenção! Erro ao carregar task! ' + this.errorMessage);
          }
        });
    },
    save(){
      if (!this.formData.task_name) {
        alert('Por favor, preencha o nome da tarefa.');
        return;
      }

      const taskData = {
        task_id:          this.taskEditId,
        task_name:        this.formData.task_name,
        task_desc:        this.formData.task_desc,
        task_end:         this.formData.task_end || false
      };

      if(taskData.task_id){
        //Se existe task_id é uma ***edição***
        axios.put(BACKEND_URL+this.type+'/'+taskData.task_id, taskData)
        .then(response => {
          if(response.status == 200){ 
            alert("Tarefa atualizada com sucesso!")
            window.location.href = '/';
          }
        })
        .catch(error => {
          this.errorMessage = error.response.data;
          alert('Atenção! Erro ao atualizar tarefa! ' + this.errorMessage);          
        });
      } else {
        //Se NÃO existe task_id é uma ***INSERÇÃO***
        axios.post(BACKEND_URL+this.type, taskData)
        .then(response => {
          if(response.status == 200){ 
            alert("Tarefa registrada com sucesso!")
            window.location.href = '/';
          }
        })
        .catch(error => {
          this.errorMessage = error.response.data;
          alert("Erro!")
          
        });
      }

    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 25px; 
  margin-bottom: 50px; 
} 

.card {
  margin-bottom: 25px; 
  width: 80%;
  margin: 0 auto;
}

</style>