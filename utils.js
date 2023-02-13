// Utils for all the important functions and methods

module.exports.isValidBill = function (bill) {
    
    if (!bill.patientName || !bill.patientAddress || !bill.hospitalName || !bill.dateOfService || !bill.billAmount) {
      return false;
    }

    return true;
  }