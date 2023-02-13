// Utils for all the important functions and methods

module.exports.isValidBill = function (bill) {
    
    if (!bill.patientName || !bill.patientAddress || !bill.hospitalName || !bill.dateOfService || !bill.billAmount || typeof bill.billAmount != 'number') {
      return false;
    }

    return true;
  }