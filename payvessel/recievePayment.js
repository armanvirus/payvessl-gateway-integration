module.exports = async(req,res)=>{
    const payload = req.body;
    const payvessel_signature = req.header('HTTP_PAYVESSEL_HTTP_SIGNATURE');
    const ip_address = req.connection.remoteAddress;
    const secret = 'PVSECRET-';
  
    const hash = crypto.createHmac('sha512', secret)
      .update(JSON.stringify(payload))
      .digest('hex');
  
    if (payvessel_signature === hash && ip_address === '162.246.254.36') {
      const data = payload;
      const amount = parseFloat(data.order.amount);
      const settlementAmount = parseFloat(data.order.settlement_amount);
      const fee = parseFloat(data.order.fee);
      const reference = data.transaction.reference;
      const description = data.order.description;
  
      // Check if reference already exists in your payment transaction table
      if ("no reference in db") {
        // Fund user wallet here
        res.status(200).json({ message: 'success' });
      } else {
        res.status(200).json({ message: 'transaction already exist' });
      }
    } else {
      res.status(400).json({ message: 'Permission denied, invalid hash or ip address.' });
    }
}