<template>
  <h2 class="text-center" v-show="tasks != undefined">Lista de Tarefas</h2>
  <div class="no-task" v-show="tasks == undefined">
    <h2 class="text-center">Você não possui nenhuma tarefa, clique no botão para criar uma</h2>

    <ButtonLink link="/task" color="purple" label="Novo" />
  </div>
 
  <div>
    <TableTask :tasks="tasks" @edit-event="handleEditEvent" @delete-event="handleDeleteEvent"/>
  </div>

</template>
<script>
//import axios from 'axios';
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
    };
  },
  methods: {
    handleEditEvent(taskId) {
      // Lógica para editar o evento
      console.log('Edit ' + taskId)
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