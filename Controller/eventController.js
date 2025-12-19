import Event from "../Model/Event.js";
import User from "../Model/User.js";


export const createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch {
    res.status(500).json({ message: "Event creation failed" });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: "Error fetching events" });
  }
};

export const bookEvent = async (req, res) => {
  const { userId, eventId } = req.body;

  try {
    const user = await User.findById(userId);
    user.bookedEvents.push(eventId);
    await user.save();

    res.json({ message: "Event booked successfully" });
  } catch {
    res.status(500).json({ message: "Booking failed" });
  }
};

export const deleteEvent = async (req, res) => {
  const { id } = req.params;
  try {
    await Event.findByIdAndDelete(id);
    res.json({ message: "Event deleted" });
  } catch {
    res.status(500).json({ message: "Delete failed" });
  }
};

export const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const event = await Event.findByIdAndUpdate(id, { title, description }, { new: true });
    res.json(event);
  } catch {
    res.status(500).json({ message: "Update failed" });
  }
};
