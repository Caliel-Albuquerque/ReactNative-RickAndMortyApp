import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#272b33',
    paddingTop: 56
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#fff'
  },
  list: {
    flexGrow: 1,
  },
  card: {
    borderRadius: 4,
    padding: 16,
    marginBottom: 36,
    alignItems: 'center',
    paddingVertical: 46,
    backgroundColor: '#3c3e44'

  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',

  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 15,
    borderRadius: 50,
  },
  bottomSheetContent: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalTitle:{
    fontSize: 20,
    marginBottom: 30
  }

})

export default styles