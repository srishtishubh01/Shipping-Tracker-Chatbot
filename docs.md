**📘 Smart Shipment Chatbot – Detailed Documentation**
--------

**1. Introduction**
-------

Smart Shipment Chatbot is a web-based conversational application designed to simulate a real-world shipment tracking experience. Instead of using traditional tracking pages, users interact with a chatbot to get updates about their orders.

The chatbot responds in a natural way, remembers tracking IDs, and updates shipment status dynamically based on time progression. This project focuses on usability, realism, and lightweight performance.

-------

**2. Problem Statement**
-------

Most shipment tracking systems:

Are slow to load

Have cluttered user interfaces

Require users to navigate multiple pages

Feel robotic and non-interactive

For students and small businesses, building such systems is complex and resource-heavy.

------

**3. Solution Overview**
-------

Smart Shipment Chatbot solves this problem by:

Using a chat-style interface

Keeping the UI minimal and fast

Simulating shipment progress logically

Avoiding backend complexity while still behaving realistically

The system works completely on the frontend using JavaScript, making it easy to deploy and understand.

-------

**4. Functional Flow**

**->**User opens the application.

**->**User enters a tracking ID or asks a question like:

**->**“Where is my order?”

**->**“Track my package”

**The chatbot:**

**->**Validates the tracking ID

**->**Saves it in memory

**->**Generates order and shipment details

**->**Shipment status is calculated dynamically.

**The chatbot replies with:**

Current shipment stage

**->**City/location

**->**Expected delivery (only if not delivered)

**->**On future searches with the same ID, progress continues forward.

------
**5. Shipment Lifecycle Logic**
-------

**The chatbot follows a realistic shipment flow:**

Order Placed

Dispatched

In Transit

Out for Delivery

Delivered


