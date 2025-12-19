import User from "../Model/User.js";
import Event from "../Model/Event.js";

export const getBookedEvents = async (req, res) => {
  try {
    const user = await User.findById(req.userId).populate("bookedEvents");
    res.json(user.bookedEvents);
  } catch (err) {
    res.status(500).json({ message: "Error fetching booked events" });
  }
};
