
// const { id } = useParams();
  // const track = skillTrackData[id];

  // console.log(track,"track");

  // if (!track) return <p className="text-center text-lg">Skill Track Not Found!</p>;

  // const handlePayment = async () => {
  //   try {

  //     const keyRes = await axios.get("http://localhost:5000/api/payment/get-key");
  //     const razorpayKey = keyRes.data.key; 

  //     const res = await axios.post("http://localhost:5000/api/payment/create-order", {
  //       amount: track.price,
  //       currency: "INR",
  //     });

  //     const { id: order_id, amount, currency } = res.data;

  //     const options = {
  //       key: razorpayKey,
  //       amount,
  //       currency,
  //       name: "EduLearn",
  //       description: track.title,
  //       order_id,
  //       handler: async (response) => {
  //         alert("Payment Successful!");
  //         console.log("Payment Response:", response);
  //       },
  //       prefill: {
  //         name: "Lokesh Awasthi",
  //         email: "awasthi21.lokesh@gmail.com",
  //         contact: "8442060273",
  //       },
  //       theme: {
  //         color: "#3399cc",
  //       },
  //     };

  //     const razor = new window.Razorpay(options);
  //     razor.open();
  //   } catch (error) {
  //     console.error("Payment Error:", error);
  //   }
  // };

  // return (
  //   <div className="p-6 max-w-2xl mx-auto text-center">
  //     <h1 className="text-3xl font-bold mb-4">{track.title}</h1>
  //     <p className="text-gray-600">{track.description}</p>
  //     <div className="mt-4 text-lg font-bold text-blue-600">₹{track.price}</div>
  //     <button
  //       onClick={handlePayment}
  //       className="mt-6 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
  //     >
  //       Buy Now
  //     </button>
  //   </div>