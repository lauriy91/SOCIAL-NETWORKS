<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>

<v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <v-card>
            <v-card-text>
              <v-text-field label="File name"></v-text-field>

              <small class="grey--text">* Upload your photo.</small>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                text
                color="primary"
                @click="dialog = false"
              >
                Submit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>