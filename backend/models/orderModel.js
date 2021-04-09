import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      requried: true,
      ref: "User",
    },

    OrderID: [
      {
        name: { type: String, requried: true },
        qty: { type: Number, requried: true },
        image: { type: String, requried: true },
        price: { type: Number, requried: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      requried: true,
    },

    paymentResult: {
      id: { type: String },
      Status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    taxPrice: {
      type: Number,
      requried: true,
      default: 0.0,
    },

    shippingPrice: {
      type: Number,
      requried: true,
      default: 0.0,
    },

    totalPrice: {
      type: Number,
      requried: true,
      default: 0.0,
    },

    isPaid: {
      type: Boolean,
      requried: true,
      default: false,
    },
    paidAT: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      requried: true,
      default: false,
    },
    deliveredAT: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
