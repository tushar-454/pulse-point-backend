/* 
  get all doctors from this api
*/
const getAllDoctors = async (req, res, next) => {
  try {
    res.status(200).json({
      message: 'All doctors fetched successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllDoctors };
