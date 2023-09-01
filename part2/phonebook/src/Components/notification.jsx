const Notification = ({ message }) => {

    const footerStyle = {
      color: 'green',
      fontStyle: 'italic',
      fontSize: 30,
      fontWeight: 'bold',
      backgroundColor: 'grey'
    }
  
    if (message === null) {
      return null
    }
  
    return (
      <div className='newPerson' style={footerStyle}>
        {message}
      </div>
    )
  }

export default Notification