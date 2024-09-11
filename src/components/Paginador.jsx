const Paginador = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageChange = (page) => {
      if (page >= 1 && page <= totalPages) {
        onPageChange(page);
      }
    };
  
    return (
      <div className="flex justify-center my-4">
        <button 
          className="btn btn-outline" 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          Previous
        </button>
  
        {Array.from({ length: totalPages }, (_, index) => (
          <button 
            key={index + 1} 
            className={`btn ${currentPage === index + 1 ? 'btn-active' : 'btn-outline'}`} 
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
  
        <button 
          className="btn btn-outline" 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    )
  }
  
  export default Paginador