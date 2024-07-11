<template>

  <div>
      <h2 class="text-center" v-show="tasks != undefined">Lista de Tarefas</h2>
    <div class="no-task" v-show="tasks == undefined">
      <h2 class="text-center">Você não possui nenhuma tarefa, clique no botão para criar uma</h2>

      <ButtonLink link="/task" color="purple" label="Novo" />
    </div>
  
    <div>
      <TableTask :tasks="tasks" @edit-event="handleEditEvent" @delete-event="handleDeleteEvent"/>
    </div>
  </div>


</template>
<script>
import axios from 'axios';
import { BACKEND_URL } from '/configAmbiente';
import ButtonLink from '@/components/Structure/ButtonLink.vue'; 
import TableTask  from '@/components/Structure/TableTask.vue'; 


export default {
  components: {
    ButtonLink,
    TableTask
  },
  data() {
    return {
      tasks: [],
      type: 'tasks'
    };
  },
  mounted() {
    console.log(BACKEND_URL+this.type);
    this.tasks = this.searchTasks();
  },
  methods: {
    searchTasks(){
      axios.get(BACKEND_URL+this.type, {
      })
        .then(response => {
          if(response.status == 200){ 
            this.tasks = response.data;
          }
        })
        .catch(error => {
          this.errorMessage = error.response.tasks;
          if(this.errorMessage == undefined){

          } else {
            alert('Atenção! Erro ao carregar tasks! ' + this.errorMessage);
          }
        });
    }, 
    handleEditEvent(taskId) {
      this.$router.push({ name: 'task', params: { taskId: taskId } });
    },
    handleDeleteEvent(taskId) {
      // Lógica para deletar o evento
      console.log('Delete ' + taskId)
    }
  }
};
</script>

<style scoped>

</style>