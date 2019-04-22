<template>
  <div>
  <v-form
    ref="form"
    v-model="valid"
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
      :validate-on-blur="true"
      @click="changeFun"
    ></v-text-field><!-->

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
      :autofocus="false"
      :validate-on-blur="isValidate"
      @click="changeFun"
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>


  </v-form>




  </div>
</template>

<script>
  export default {
    data: () => ({
      isValidate:false,
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    }),

    methods: {
      validate () {
        console.log(1)
        console.log(this.$refs.form.validate());
        if (this.$refs.form.validate()) {


          //this.snackbar = true
        }
      },
      changeFun(e){
        console.log(e);
        console.log(2)


          //e.target.blur()
      },
      reset () {
        console.log(this.valid)

        console.log(this.nameRules);
        //this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      }
    }
  }
</script>
<!--event.target.blur();-->
