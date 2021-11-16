<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-text>
          <v-file-input v-model="image" label="File name"></v-file-input>

          <small class="grey--text">* Upload your photo.</small>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text color="primary" @click="addImage"> Submit </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      dialog: false,
      image: null,
    };
  },
  methods: {
    addImage() {
      let formData = new FormData();
      formData.append("user_name", "Robert de Niro");
      formData.append("user_id","34555444");
      formData.append("image", this.image);
    const config = {
        headers: { "content-type": "multipart/form-data" },
      };
      axios
        .post(
          "http://localhost:3000/image/save",formData, config).then(res=>{
            console.log(res.data)
          }).catch(err =>{
            console.log(err)
          })
      this.dialog = false;
    },
  },
};
</script>