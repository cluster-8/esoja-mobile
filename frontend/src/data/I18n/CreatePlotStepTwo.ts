export default {
  pt: {
    CreatePlotStepTwo: {
      title: 'Identifique o talhão',
      subtitle: 'Insira um nome e uma descrição para o seu novo talhão',
<<<<<<< HEAD
      defaultValueLabel: 'Selecione uma propriedade',
      fieldName: 'Nome',
      fieldNamePlaceholder: 'Digite um nome para o talhão',
      plantingDateLabel: 'Data de plantio',
      plantingDatePlaceholder: 'Data do plantio',
      cropYearLabel: 'Ano safra',
      cropYearPlaceholder: 'Informe o ano safra',
      fieldDescription: 'Descrição',
      fieldDescriptionPlaceholder: 'Digite uma descrição',
      continueButton: 'Finalizar',
      genderLabel: 'Selecione a propriedade',
=======

      fieldPropertyLabel: 'Selecione e propriedade do talhão',

      fieldName: 'Nome do talhão',
      fieldNamePlaceholder: 'Digite um nome para o talhão',

      fieldDate: 'Data de plantio',
      fieldDatePlaceholder: 'Insira a data de plantio',

      fieldCropYear: 'Ano safra',
      fieldCropYearPlaceholder: 'Insira o ano safra',

      fieldDescription: 'Descrição',
      fieldDescriptionPlaceholder: 'Digite uma descrição',

      continueButton: 'Continuar',
>>>>>>> 148aa8128eedf2515ed243156ec3cf5200915182
      errors: {
        stepTwoName: {
          required: 'Nome é obrigatório'
        },
        plantingDate: {
          required: 'Data de plantio é obrigatória'
        },
        cropYear: {
          required: 'Ano Sagra é obrigatório',
          min: 'Formato inválido! (ex: 2019/2020)'
        }
      }
    }
  },


  en: {
    CreatePlotStepTwo: {
      title: 'Identify the field',
      subtitle: 'Enter a name and description for your new field',
<<<<<<< HEAD
      defaultValueLabel: 'Select a property',
      fieldName: 'Name',
      fieldNamePlaceholder: 'Enter a name for the field',
      plantingDateLabel: 'Planting date',
      plantingDatePlaceholder: 'Planting Date',
      cropYearLabel: 'Year crop',
      cropYearPlaceholder: 'Enter the crop year',
=======

      fieldPropertyLabel: "Select  property's field",

      fieldName: "Field's name",
      fieldNamePlaceholder: 'Enter a name for the field',

      fieldDate: 'Plating date',
      fieldDatePlaceholder: 'Enter planting date',

      fieldCropYear: 'Crop year',
      fieldCropYearPlaceholder: 'Enter crop year',

>>>>>>> 148aa8128eedf2515ed243156ec3cf5200915182
      fieldDescription: 'Description',
      fieldDescriptionPlaceholder: 'Enter a description',
      continueButton: 'Finish',
      genderLabel: 'Select a property',
      errors: {
        stepTwoName: {
          required: 'Name is required'
        },
        plantingDate: {
          required: 'Planting date is required'
        },
        cropYear: {
          required: 'Sacred Year is required',
          min: 'Invalid format! (ex: 2019/2020)'
        }
      }
    }
  }
};
