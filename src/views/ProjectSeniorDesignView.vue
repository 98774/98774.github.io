<template>
  <div class="content-panel content">
  <div class="content">
    <h2>Progress Report for Jonathon Snyder</h2>
    <p>
      This is the collection of progress reports from my senior design class. They appear in reverse
      chronological order so the build process starts at the bottom and proceeds upward.
    </p>
    <br /><br /><br />
    <h4>Week 14:</h4>
    <b>Date:</b> 04/19/2023<br />
    <b>Total hours:</b> 20<br />
    <b>Description of project design efforts:</b><br />
    This week was full of a lot of work! Most of it was troubleshooting and encountering problems
    with our USART communication so there wasn't a lot of specifc progress. The primary work I did
    this week was troubleshooting the STM32. From last week, we had some parts of the project
    working but overall very little was entirely functional. We encountered problems with our USART
    communications whenever we tried to run the code in "run" mode instead of debug mode. OUr theory
    was that the STM clock was driven by USB or some part of the debugger when in run mode and that
    when it ran in "run" mode, the clock was configured differently. I suspected that our clock
    configuration was bad, so we spent a long time looking at the diagrams from the manuals for our
    board. The two clock configuration diagrams are shown below.
    <p></p>
    <img style="max-width: 100%" src="@/assets/project/senior-design/clock.png" />
    <h3>Figure 1: The clock structure in the STM32F091xx device</h3>
    <img style="max-width: 100%" src="@/assets/project/senior-design/clk_fam.png" />
    <h3>Figure 2: The clock architecture in STM32FO devices</h3>

    Careful study of these diagrams led me to the conclusion that we were configuring the PLL clock
    source correctly for our device. We were updating the PLLSRC, PLLMUL, and SW bits in the
    RCC-&gt;CFGR register. And based on our PWM signal, the PCLK signal coming out of our AHB scaler
    was correct. The USART modules used either the HCLK or PCLK signals to function but both of the
    signals seemed configured for 48 MHz. As such we were left baffled as to the random functioning
    of our USART communication. For 2 days (~6-8 hours each), we troubleshooted everything we could
    think of. I wrote code to slow down our USART responses, to wait between each transaction, to
    verify that every character was being sent. In debug mode the code worked perfectly, but every
    time we would go to run the code, it would just hang. What made it even harder to debug was that
    it would hang a different places. Sometimes USART would never start, sometimes it would get to
    the 3rd command in the configuration sequence before hanging. We never managed to figure this
    out. What Luke ultimately did that fixed it was change our code to use the native 8MHz HSI
    clock. After this change, our results were consistent and we were able to correctly diagnose the
    other problems.

    <br />
    <br />
    Zack and I worked on finalizing the code after Luke figured out that change. I wrote code that
    verified that we could send a character properly over USART. Once we had established that, we
    were able to determine that the Wi-Fi module needed more time before we send the first command.
    Our code was hanging because we sent a command and waited for a response before the wifi module
    ever had a chance to see the message. This caused our program to hang before it ever configured
    the wifi module. As such, we changed our code to just wait for a long time (100000 cycles)
    before it tried to configure WiFi. This fixed the problem and also fixed another problem we were
    having where the code would run but then if we power cycled the device it would no longer run.
    We realized this is because the Wifi module was still not having enough time to boot and so when
    we power cycled, it would reset but when we just reran the code, the wifi module would stay on
    and therefore work as intended. But with this new delay code, everything runs fine. And by the
    end of the day we were able to successfully send random data to two modules simultaneously which
    was part of our PSSC's.

    <img style="max-width: 100%" src="@/assets/project/senior-design/working.jpg" />
    <h3>Figure 3: Both modules working simultaneously.</h3>

    <br />
    As another note, we (not naming names...) fried the micro on one of our boards and so needed to
    remake that. I spent awhile soldering many of the components.

    <br /><br /><br />
    <h4>Week 13:</h4>
    <b>Date:</b> 04/14/2023<br />
    <b>Total hours:</b> 16<br />
    <b>Description of project design efforts:</b><br />

    <h4>Bluetooth work:</h4>
    In what feels to be an eteral and repeating process, I spent more time working on the bluetooth
    communication this week. Agrim got a working prototype over the weekend of a basic communication
    app but when we tried to get it over to bluetooth we ran into trouble. Apparently we can't use
    the same code as before and we aren't exactly sure why. I rolled all our bluetooth and wifi
    ESP32 code into a cohesive module so in theory, as soon as the app is able to connect to the
    ESP32, we will be back to the place we were at before with our project except now it will be
    with our final app. Much of the work I did today had to do with data structures in python. The
    ble.gatts_register_services function takes a very specific form of service data structure. The
    function expectes a tuple composed of two more tuples, each of which is itself another tuple.
    This took awhile to figure out. Still, after much debugging we got a few lines written that
    successfully establish a bluetooth service using the correct characteristics.
    <br />
    <img style="max-width: 100%" src="@/assets/project/senior-design/uuids.png" />
    <h3>Figure 1: The code to establish a successful BLE service</h3>
    <br />

    <h4>LED Display work</h4>
    Luke and I spent a long time working on fixing a timing issue on our STM 32. We had to go deep
    in the clock mechanism block diagrams to figure out how to use the inbuilt clocking features. I
    spent some time figuring out exactly how the block diagram works. To configure the clocking
    mechanism, we needed to set some different registers. I set the value of the PLLSRC register to
    0x10 to select the HSI 8Mhz input. The diagram included reference to an internal HSI48 clock
    line that would have been 48 MHz as we wanted, but it was not actually available on our
    hardware. Thus we selected the HSI line. Then I needed to configure the PREDIV bits to perform
    no division on the signal. Then I configured PLLMUL to multiply by 8 to get a 48MHz signal.
    Finally, we configure the SW switch to select the PLLCLK line as the input clock to the system.
    After configuring all these registers, we finally got the clock to work correctly for our PWM
    signal.
    <br />
    <img style="max-width: 100%" src="@/assets/project/senior-design/clock(1).png" />
    <h3>
      Figure 2: A portion of the clock diagram for the STM32 chip we use. (pg. 16 of the feature
      manual)
    </h3>
    <br />

    One other thing we found out about this was that our Wi-Fi module was hanging when we run the
    code our project board. If we run it in debug mode it works fine but somehow in run mode it
    won't work. The primary problem seems to be that it hangs waiting for a response from the USART
    RX line. Our wifi module will send the OK response but the STM32 never detects it and so it just
    hangs forever. We might add a timeout to the configuration so that after enough time it will
    just skip the configuration and try to run anyways.
    <br /><br />

    I also spent a few hours programming the app with Agrim. We were working on the UI to try and
    build an array of data for the input from a grid. This part of the app proved pretty difficult
    to do dynamically so eventually we decided to just do it statically and make some click function
    that runs whenever a button is clicked. This is a relatively brief summary of my work this week
    because I spent so much time on the project.

    <br /><br /><br />
    <h4>Week 12:</h4>
    <b>Date:</b> 04/04/2023<br />
    <b>Total hours:</b> 11<br />
    <b>Description of project design efforts:</b><br />
    <h4>Casing Work:</h4>
    I spent a lot of time this week working on the casing for our project. Last week Luke got the
    case 3D printed but we still needed to figure out how to actually mount our board in case. As a
    refresher, our case consists of three parts. First, a front plate that hosts the LED grid
    between a plastic layer and a layer of clear acrylic covering. Second, a side layer that spans
    the z-axis for our device. And third, a back cover that serves to complete the enclosure and
    what our PCB is actually mounted to. In the work I did this week, I started with the side casing
    that hosts the power socket.In a bit of a rushed decision, I decided to mount our power socket
    in the wall of our case without checking the z-axis. I drilled a hole of the right size to fit
    the wall plug and then used the glue gun to mount it more permanently. Fortunately, as I found
    out later, the location I chose for the wall plug works fine for the design, but it would have
    been smart to double check before I just went ahead and drilled the hole. In the image below,
    you can see the location of the hole on the wall of our casing as well as the socket in that
    hole.
    <br />
    <img style="max-width: 100%" src="@/assets/project/senior-design/side_case.jpg" />
    <h3>Figure 1: A view of the side casing with the power socket mounted in it</h3>
    <br />

    After drilling this hole, I started to build the top plate for our design. This plate was pretty
    simple, I just had to drill a hole in the back in the right place for the wires on the back of
    our LED grid to poke through into the interior casing. This hole was easy to drill but
    challenging to place correctly. I didnlt put it in quite the right place and so the wires on the
    back of the LED grid had to bend hard to fit. I didn't break the soldering but it is not the
    most ideal configuration. Once I had the LED grid in the right place, I used hot glue to mount
    it to 3D printed part. Then, I glued the acrylic layer on top so that the LED grid was sealed
    in. Below is an image of this final part.
    <br />
    <img style="max-width: 100%" src="@/assets/project/senior-design/LEDgrid.jpg" />
    <h3>Figure 2: The completed housing for the LED casing</h3>
    <br />

    Following the LED casing, I started working on mounting the PCB to the back plate. I wanted to
    use screws so that we can easily remove the board to add or remove components as needed. To
    accomplish this, I used metal spacers glued to the back plate of the case. With this design, the
    PCB can be screwed and unscrewed easily. It was challenging to get the screws mounted in the
    right place on the back plate without the board as a guide. To get around this, I screwed the
    spacers to the board and then glued them to the back plate. This seemed to work quite well.
    Below is an image of the method I used to mount the PCB. Now, aside from putting the final
    casing together, our project packaging is complete.
    <br />
    <img style="max-width: 100%" src="@/assets/project/senior-design/screw_hole.jpg" />
    <h3>Figure 3: The PCB mounting system for our project</h3>
    <br />

    <h4>PCB Work:</h4>
    This week I also spent awhile soldering our second board. I added the buck converter as well as
    the resistors and LEDs for power indicators. I also added programming headers to both boards and
    attached power connectors.
    <br /><br />

    <h4>Testing Code:</h4>
    After Zach and I spent awhile soldering and verifying components, we decided to test the PCB for
    functionality with the microcontroller. Somewhat shockingly, we were able to program the
    microcontroller and turn on a debug LED on our first try. We will still need to make sure all
    the clocking circuitry will work for our purposes, but we were successfully able to program the
    device which was a big success!

    <br />
    <img style="max-width: 100%" src="@/assets/project/senior-design/code_run.jpg" />
    <h3>Figure 4: A debug LED powered on on our PCB</h3>

    <br /><br /><br />
    <h4>Week 11:</h4>
    <b>Date:</b> 3/30/2023<br />
    <b>Total hours:</b> 8<br />
    <b>Description of project design efforts:</b><br />

    <h5>Blueototh App Development:</h5>
    This week Agrim and I worked on a development for an app. We transitioned off of the tutorial I
    worked on last week and instead worked on
    <a href="https://medium.com/@martijn.van.welie/making-android-ble-work-part-1-a736dcd53b02"
      >this</a
    >
    tutorial. The learning I gained last week was useful to have an understanding of the basics of
    some of the BLE protocol but ultimately our work this week showed me how little I really
    understand about the basics of how BLE functions. But, the tutorial we followed this week proved
    very helpful for explaining some of the more compdetails.

    <h4>Overview of our code:</h4>
    <h4>onCreate method</h4>
    The onCreate method is what runs first in our code. Once Android has set up our app within the
    OS, it runs the onCreate method as the entry point to our code. This method handles the creation
    of the objects and components of our app. Within our onCreate method, we first perform some
    permission checks. These checks are EXTREMELY IMPORTANT! For BLE to function, our app requires a
    variety of permissions, including the location permission. Though somewhat counterintuitive,
    android will not let our app run without access to the location permission. This proved to be a
    sticking point for a few hours while we had our code running but apparently doing nothing. It
    turns out that we were not obtaining permission from the user to use location. Once we requested
    that permission, our code immediately was able to detect the device we were scanning for.
    <br />
    <img style="max-width: 100%" src="@/assets/project/senior-design/onCreate.png" />
    <h3>Figure 1: The onCreate method as well as some bluetooth initializations.</h3>
    <br />
    <h4>Bluetooth Scanning</h4>
    The next major component of our project is the bluetooth scanning. Once the app begins, it needs
    to detect other bluetooth devices. There are a lot of different options for scanning as well as
    ways to set it up in Android studio. What we got to work was using the BluetoothLeScanner class
    built into android. This class allows us to define a scanner object that we can pass filters
    into to look for specific devices. This proved very helpful because it allowed us to pass in the
    name of our device, LED Controller, and only connect to that device. The scanner class also
    allows passing in a filter list with a series of filter constants. For our scanning we have
    chosen to use SCAN_MODE_LOW_LATENCY to scan very frequently, MATCH_MODE_AGGRESSIVE to try and
    connect very aggressively, and MATCH_NUM_ONE_ADVERTISEMENT to try and connect to the first match
    that the scanner object finds.
    <br />
    <br />
    We implement a button in our code to initiate this scanning. When the user clicks the button, it
    will attempt to scan using the filters and permissions we have specified. If that works, the app
    will connnect and print the name of the device it found to the user.

    <br />
    <h4>Scanner Callback</h4>
    Once the scanner connects to a device, it triggers a callback that we use to send data. This is
    the point that we got stuck at this week. It seems like sending data over BLE is very
    nontrivial. There are many functions with names like readCharacteristic and writeDescriptor.
    Android has a lot of documentation on their functions which proved invaluable. However, with a
    multistep process like configuring BLE, it is difficult to tell if we are using the correct
    function to write data while experiencing other problems, or if our problem is the wrong
    function. The block of code below demonstrates our basic attempt at configuring a GATT server
    and then sending data from it. Currently this code does not work ecause we are unsure exactly
    what sending data looks like. But we feel that we are close to getting it to work.

    <br />
    <img style="max-width: 100%" src="@/assets/project/senior-design/gatt.png" />
    <h3>Figure 2: The basic code for our GATT service</h3>
    <br />

    <br /><br /><br />
    <h4>Week 10:</h4>
    <b>Date:</b> 03/24/2023<br />
    <b>Total hours:</b> 9<br />
    <b>Description of project design efforts:</b><br />

    <h5>Bluetooth Progress</h5>
    This week I spent a substantial amount of time working on the app we will use in our final
    design. After getting a successful prototype of data from the phone to the STM32, I decided it
    was very important to actually get the final app working. To that end I spent a few hours doing
    block programming on a site called
    <a href="https://x.thunkable.com/"> Thunkable. </a> This programming was easy to prototype and I
    got a working model that could send text to the ESP32.

    <img style="max-width: 100%" src="@/assets/project/senior-design/block_code.png" />
    <img style="max-width: 100%" src="@/assets/project/senior-design/thunkable.png" />
    <h3>Figure 1: The Thunkable block programming and app layout</h3>

    <br /><br />

    This was useful but I quickly learned that this interface was not going to allow us to do very
    much. As such I started in on true Android app development with Android studio. It turns out
    that apps are very complicated so I spent multiple hours working on watching tutorials and
    trying to understand at all what to do. BLE as a protocol is very complicated and not
    particularly intuitive. Here is a list of a bunch of resources I used:
    <a href="https://www.youtube.com/watch?v=yTnsV_J57i8">How to Create PSoC BLE App</a>
    <br />
    <a href="https://www.youtube.com/watch?v=zeN88yh7YdY">Building Android Apps to Control BLE</a>
    <br />
    <a
      href="https://devzone.nordicsemi.com/guides/short-range-guides/b/bluetooth-low-energy/posts/ble-services-a-beginners-tutorial"
      >BLE Services: A beginners Tutorial</a
    >
    <br />

    <br /><br />
    After many tutorials (these and more) I finally found one that talked through some of the basics
    of a scanning app and more of the theory behind it. This tutorial:
    <a href="https://www.youtube.com/watch?v=YwTV3OIHorU">Connecting Devices</a>, Provides a very
    usful set of code and explains pretty well the reasoning. A few hours of debugging later showed
    me that apps are still complicated but at least I had a button that asked the user for Bluetooth
    permissions. Here is some of the code I got from the tutorial.

    <img style="max-width: 100%" src="@/assets/project/senior-design/code.png" />
    <h3>Figure 2: The code for a BLE Android app</h3>

    Overall I fell that I made very good progress on the app this week but I'm fearful that it is
    too late. Agrim and I will discuss next week how we want to go about finishing it and exactly
    who will be responsible for what aspects of it.

    <br />
    <h5>Legal Analysis</h5>
    This week I also spent 2 hours working on the legal analysis. That is available under the
    documents tab.

    <br /><br /><br />
    <h4>Week 8-9:</h4>
    <b>Date:</b> 03/08/2023<br />
    <b>Total hours:</b> 7<br />
    <b>Description of project design efforts:</b><br />

    <h5>Week 8:</h5>
    In week 8 I mainly worked on the presentation and the PCB designs with Zack. Overall this was a
    very light week for me. My specific contributions include the Prototyping section of the
    presentation and the Software Overview. On the PCB I reviewed Zacks work to make sure that
    everything was ready for the design review.

    <h5>Week 9:</h5>
    <h5>Bluetooth Progress</h5>
    This week I spent most of my time working on bluetooth progress. From my past research, I
    started following the code example at this tutorial:
    <a href="https://www.youtube.com/watch?v=a54ZSVPpt5U">BLE with Micropython</a>. This tutorial
    was extremely helpful for doing almost exactly what we want. Luke and I worked together after
    the initial code was added to see about sending and recieving data. At first we couldn't get the
    phone to connect using the code in the tutorial but after trying a few serial connection apps
    from the app store, we succeded in connecting. <br /><br />
    The next step was to transmit data and for this we simply input data to the serial port on the
    phone side and recieved the same data on the ESP32. An example of our "junk data" is shown
    below.
    <img style="max-width: 100%" src="@/assets/project/senior-design/initialdata.png" />
    <h3>Figure 1: Data recieved on the ESP32 from the phone</h3>

    <br />
    Once we started transmitting data, I wanted to check if we would be able to transmit data of the
    length required for our LED grids. This data would be "3 * 64 * number of grids" bytes long so I
    wrote out a random ascii message of that length to test. As it turned out, the ESP32 would only
    display the first 20 characters of that output. My first guess was that the recieve buffer was
    too small for the incoming data. It turns out that that was correct, but it took me awhile to
    figure out how to actually access and change the buffer. We are using a GATT client on the ESP32
    to interface with the bluetooth connection. This is set up in the form of tuples of services
    that refer to different functions the GATT client should perform. As such, the rx buffer we use
    is stored within that client but conveniently, the code we are using passes out that butffer to
    the self.rx variable (self being an instance of the BLE class in Micropyton). While browsing the
    documentation
    <a
      href="https://docs.micropython.org/en/v1.14/library/ubluetooth.html?highlight=bluetooth#ubluetooth.BLE.gatts_read"
      >found here,
    </a>
    I found that there is a function called gatts_set_buffer() that takes in a buffer and a size.
    This made changing the buffer size to one big enough for our purposes easy. I also confirmed my
    first guess was correct because the documentation says that the default buffer size is 20.

    <br /><br />
    With the buffer now displaying all the data we needed, the next task was parsing that data. The
    buffer is a bytes object so I looked around the documentation for bytes in python to figure out
    how to manipulate it. We aren't entirely sure if we even need to mess with the data in
    micropython or if we just send it straight on to the displays themselves, but if we do need to
    parse it, I found a line of code that will convert a bytes array into sets of 3 bytes. That
    allows us to make a list of GRB values for our LED's. The line is:
    <br /><br />

    message = [buffer[i:i + 3] for i in range(0, len(buffer), 3)]
    <br /><br />
    where buffer is the array we are reading from and message is the list output. Using the above
    line, I was able to convert the input to useful data as shown in the image below.

    <img style="max-width: 100%" src="@/assets/project/senior-design/format_data.png" />
    <h3>Figure 2: The original buffer data and the parsed data in a list.</h3>

    Overall, we successfully have a phone talking to the ESP32 over bluetooth and the ability to
    manipulate whatever data it sends as we please.

    <h5>Clock Diagram</h5>
    In ManLab this week, we had a discussion with the course staff about the clock we are using for
    the STM32. On the dev board, by default the system uses a 48 MHz external crystal oscillator as
    the clock. But without that, it will default to the HSI clock built into the board. As a result,
    our timing for DMA will be off once the PCB is complete. To remedy this, we will need to
    configure the clock using the onboard configuration registers so that we still have a 48 MHz
    input clock. The block diagram below shows the clock circuitry from the STM32. We need to update
    the PLLSRC to use the HSI input and then change the PLLMUL to be 12 (8/2 * 12) = 48 MHz. Then we
    need to use the SW bits to select PLLCLK instead of HSI for the input clock. This should not be
    too difficult, but it is imperative to the correct functioning of our board.

    <img style="max-width: 100%" src="@/assets/project/senior-design/clock_diagram.png" />
    <h3>Figure 3: The STM32F0x clock system block diagram (pg. 103 in the reference manual)</h3>

    <br /><br /><br />
    <h4>Week 7:</h4>
    <b>Date:</b> 2/24/2023<br />
    <b>Total hours:</b> 6<br />
    <b>Description of project design efforts:</b><br />

    <br />
    <h5>Document Updates:</h5>
    This week I spent a few hours going through our teams past documents and updating them with
    feedback. There isn't much to write here about that but the specific documents I updated were
    A2, A5, and A8. I also spent time going over the template for the midterm design review. I
    looked at the past examples that are posted on Brightspace for inspiration and then added some
    basic stuff to the PowerPoint. We discussed in ManLab who would do what sections.

    <br />
    <h5>BLE on the ESP32:</h5>
    One of the major components to our project that remains unfinished is the Bluetooth
    communication between the app and the ESP32 controller. This link is a critical path in our
    project so it is very important that we get this working soon. I did some googling and found
    <a href="https://www.youtube.com/watch?v=a54ZSVPpt5U">this</a> useful tutorial for using
    micropython with BLE. I started implementing some code in micropython but have yet to get
    anything to work.

    <br />
    <h5>Prototyping UART</h5>
    Luke has been working on the UART communication with the Wi-Fi module for awhile and I joined
    him on that on Wednesday. I had some background knowledge on UDP that ended up being very
    helpful for getting the code to work. Specifically, the fact that UDP is not an acknowledgment
    based protocol simplified our code immensely. The Wi-Fi module needs to communicate with the
    ESP32 access point to transfer data. But the communication only needs to go from the ESP32 to
    the ESP8266. As such, we only needed to configure the Wi-Fi module to listen for incoming
    connections. This takes only a few AT commands as we figured out from
    <a href="https://gist.github.com/mgub/3f4d2f074305d4d84344">this</a> guide.
    <br />
    <br />
    After typing in these commands, I made some edits to the micropython code for our ESP32 so that
    it would run as a UDP client instead of a TCP client. This involved changing the socket type
    from SOCK_STREAM to SOCK_DGRAM as can be found on the Micropython documentation
    <a href="https://docs.micropython.org/en/latest/library/socket.html">here</a>.

    <br /><br /><br />
    <h4>Week 6:</h4>
    <b>Date:</b> 2/17/2023<br />
    <b>Total hours:</b> 9.5<br />
    <b>Description of project design efforts:</b><br />

    <h5>PCB Design Work:</h5>
    This week I worked on the PCB more with Zack. The largest challenge for this was implementing
    the buck converter. We spent quite a while laying out traces and doublechecking each other's
    work only to learn that the planes depicted in the wiring diagram for the buck converter need to
    match exactly. Initially I had put traces that were wide but I hadn't realized that they layout
    actually needed to be a surface plane for the converter. But after ManLab we learned that and
    made the appropriate changes.
    <br /><br />
    <img style="max-width: 100%" src="@/assets/project/senior-design/buck_wrong.png" />
    <h3>Figure 1: Our original (incorrect) buck converter</h3>

    <img style="max-width: 100%" src="@/assets/project/senior-design/buck_correct.png" />
    <h3>Figure 1: Our second buck converter</h3>
    <br />

    Other than that, we took turns adding and arranging components in our design. As it turns out, I
    struggled to figure out how to add components to the back of the board. It took a lot of trial
    and error but eventually we used x to start drawing a wire, then v to add a via. This produced a
    trace that cut through the board. With the right keyboard shortcuts, everything was actually
    quite smooth. Once we get all of our necessary components figured out, we're planning to add
    some LED's and GPIO pins to debug everything on the final PCB. Updating the actual

    <br />
    <h5>ESP8266 rewiring:</h5>
    Our wiring for the ESP8266 was not great and pins kept popping out. To fix this, I decided to
    redo the wiring to be much neater. This actually seemed to cause a lot of problems as Luke and I
    found out the next day. After a bunch of trial and error and garbled output, I did finally get
    the wiring to work. We speculate that the connections on the breadboard are not great but
    logically the wiring is all correct. There were multiple times where jostling a wire would cause
    a bunch of garbled text to appear on the Tera Term. <br />

    <img style="max-width: 100%" src="@/assets/project/senior-design/ESP8266_wiring.png" />
    <h3>Figure 3: The corrected wiring for the ESP8266</h3>
    <br />

    <h5>Wi-Fi programming:</h5>

    On the software side, Luke and I had some significant breakthroughs. Using the configuration
    above, we were able to transmit data from the STM32 to the wifi module, and see the output
    through the serial adapter. This was really useful for debugging because we could physically see
    when an error was happening. With all the hardware set up, the software proved realtively simple
    to start programming. We defined some strings in C to represent different commands. There were a
    few important notes that we figured out through trial and error. 1) Every command must end with
    \r\n. 2) For sending commands, it was easiest to just loop through characters one at a time
    until we reached the end of a string. After debugging a few commands (and having the wiring
    continue to not work for some reason), we eventually got normal looking outputs and successfully
    connected the ESP8266 to my hotspot. In the image below, I show the output of disconnnecting the
    module from a hotspot and then reconnecting it. <br />
    <img style="max-width: 50%" src="@/assets/project/senior-design/hotspt.png" />
    <h3>Figure 4: The output of a few commands on the ESP8266.</h3>
    <br />

    <h5>Software Formalization:</h5>
    This week I also spent a few hours working on the Software Formalization assignment. That can be
    found under the documents tab.

    <br /><br /><br />
    <h4>Week 5:</h4>
    <b>Date:</b> 02/10/2023<br />
    <b>Total hours:</b> 8<br />
    <b>Description of project design efforts:</b><br />

    <h5><b>PCB Design work:</b></h5>
    This week I mainly did PCB design work. I spent some time messing around in Kicad, just trying
    to modify things and see how everything fit together. After getting some practice, I set to work
    adding the components we needed for our schematic. First, I wanted to add in a symbol for the
    switching regulator we wanted to use with our buck converter. I couldn't find the exact chip
    (TPS62A02DRL) in the libraries so I found the schematic for another regulator with 6 pins. Once
    I had that, I needed to rename and remap the pins to the TPS62. This process took a long time
    because I couldn't figure out how to change the pin numbers of each pin. After searching through
    a bunch of different menus and trying to make a new symbol from scratch, I discovered that you
    could edit the values of which pins mapped to which spot on the schematic diagram. This was a
    very helpful discovery because It let me rework the diagram so that it matched the pinout of the
    TPS62A02DRL. However, I also needed to make the footprint match the schematic. It took a bit of
    digging, but I found that the TPS62 chip uses the SOC-563 package. This footprint was already in
    a Kicad library so it was easy to map to the schematic I had made.
    <br /><br />
    <img style="max-width: 100%" src="@/assets/project/senior-design/TPS62_sch.png" />
    <h3>Figure 1: The Kicad schematic for the TPS62A02DRL</h3>

    <img style="max-width: 100%" src="@/assets/project/senior-design/TPS62_pin.png" />
    <h3>Figure 2: The datasheet description of the pins on the TPS62A02DRL</h3>

    <br />
    Once the TPS62A02DRL was available on the schematic I worked with Zack to build the entire buck
    converter. To do this we used the schematic from Luke's progress report. To obtain the parts
    list we used the TI Webbench simulator which provides a breakdown of all the parts we needed.
    This was extremely useful for the design of the buck converter. However, once we started looking
    through the specific footprints for the parts we needed, we realized that there were a lot of
    different options. We tried to find alternate parts such that everything used the 0805 footprint
    but there were a few parts that didn't have one available.
    <br /><br />
    In any case, we set about adding the parts to the schematic. This was good practice for some of
    the keyboard shortcuts in Kicad. For example, to rotate a selected part use r, to mirror
    horizontally use x. There are many others but they are well labeled in Kicad so I won't go into
    them here. After adding all the parts, our buck converter looked like the schematic we intended.
    There are a few important notes here. One, the buck converter design Luke made looked slightly
    different. This was because we changed some of the parts from his initial design into parts that
    used 0805 footprint. So the schematic shown here is the updated design. Two, the design in the
    regulator datasheet looks a little different than this one. We need to do more digging to figure
    out if they are logically equivalent or if there is some other factor we don't know about that
    would make both the TI design work as well as the one in the datasheet.
    <br /><br />
    <img style="max-width: 100%" src="@/assets/project/senior-design/buck_sch.png" />
    <h3>Figure 3: The schematic for the buck converter as implemented in Kicad</h3>

    The next thing I designed was a schematic for the ESP8266 wifi module. For this part of the
    design, I decided to make use of the 2x4 pin header footprint. The version of the ESP8266 board
    that we have has a 2x4 set of header pins to connect it to the breadboard. Since we plan to use
    the same module in our final design, all we need to do is add through-holes to solder the Wi-Fi
    module to the PCB. Hence using the 2x4 header mounting. There were different sizes to pick from
    for the hole spacing. Based on the existing spot for the programming header, we decided to use
    2.54 mm spacing for these headers.
    <br /><br />
    To determine what connections to make, I used the UART 5 Tx/Rx pins from the STM32. The Tx pin
    is PC12 and the Rx pin is PD2. These pins are otherwise unused in our system so it seemed good
    to use them. This is the only interfacing that the STM32 will do with the Wi-Fi module so the
    connections were very simple to implement in KiCad. Based on the wiring from
    <a href="https://tttapa.github.io/ESP8266/Chap02%20-%20Hardware.html">here</a>, we added some
    resistors to protect the CH_PD and the RST pins from overcurrent. I will continue updating the
    diagram to match this diagram but for right now the image below represents what the schematic
    looks like.

    <img style="max-width: 100%" src="@/assets/project/senior-design/ESP8266_sch.png" />
    <h3>Figure 4: The schematic for the ESP8266 as implemented in Kicad</h3>

    For a different visual on our project, I used the 3D renderer from Kicad to generate a model. I
    thought it was pretty interesting so I included an image below.

    <img style="max-width: 100%" src="@/assets/project/senior-design/3d.png" />
    <h3>Figure 5: A 3D rendering of our PCB at present</h3>

    <br /><br /><br />
    <h4>Week 4:</h4>
    <b>Date:</b> 02/02/2023<br />
    <b>Total hours:</b> 12<br />
    <b>Description of project design efforts:</b><br />

    <h5><b> Kicad learning 1 hour:</b></h5>

    I spent some time learning how to use KiCad and starting to develop a schematic for our LED
    modules. I watched
    <a href="https://www.youtube.com/watch?v=zK3rDhJqMu0&amp;t=1118s">this</a> video on Youtube
    KiCAD Quick-Start Tutorial which taught me a lot of the basics. Then I took the template PCB
    layout from 362 and began experimenting with connections. I realized that our LED's use a JST
    connector but in the footprints library of Kicad there were more than 15 footprints. I need to
    figure out exactly what footprint we need to connect our LED's. But aside from the exact
    footprint, I was able to configure the pin assignments for our LED strips.
    <img style="max-width: 100%" src="@/assets/project/senior-design/PCB.png" />
    <h3>Figure 1: The PCB schematic for the STM32</h3>

    <br />
    <h5><b>LED Programming: </b></h5>
    For the LED's this week, I spent awhile configuring the way we stored data so that each LED
    could be addressed individually. We made a large array as a data structure to store the color
    configuration of each LED. Then when DMA copies memory to the capture/compare register of the
    timer, any changes we make to the colors will automatically be copied over. Currently our code
    is set to use circular mode for DMA but I would like to change that so that we can call some
    'write' function that will turn DMA on and copy all the values to memory, and then turn DMA off
    so that it isn't constantly copying in the background. This would also give us greater control
    of the precise framerate and allow us to display data only when we want, rather than all the
    time.

    <br />
    <h5><b>Wifi Research and Programming: </b></h5>
    The main goal this week was to get the wifi module talking so that we can verify our hardware
    connections. Zack and I worked on this this week. Originally we had wanted to use the nRF24L01
    chip but after trying to program it, we got stuck and decided the ESP8266 would be more
    efficient. The primary difference between these chips is that the ESP8266 uses a built in WiFi
    stack whereas the nRF24L01 has no onboard stack. Instead, it is effectively a dumb antenna that
    needs a stack programmed onto it. After deciding to use the ESP8266, we began researching how to
    program it. From
    <a href="https://www.electroschematics.com/esp8266-datasheet/">this</a> link we figured out that
    the board we have uses UART at 115200 baud. Once we realized that, I decided to go ahead and get
    the WiFi module to communicate with FTDI serial module from ECE 362. To do that, I followed the
    pinout shown at the link above:
    <img style="max-width: 100%" src="@/assets/project/senior-design/ESP8266_pinout.png" />
    <h3>Figure 2: The labeled pinout from https://www.electroschematics.com/esp8266-datasheet/</h3>

    <br />This made it very easy to match pins because the board was not otherwise labeled. Here is
    a schematic of the pinout I landed on and a picture of the actual wiring.
    <br />

    <img style="max-width: 50%" src="@/assets/project/senior-design/UART_conn.png" />
    <h3>Figure 3: The schematic of my UART connections</h3>
    <img style="max-width: 50%" src="@/assets/project/senior-design/UART_wiring.jpg" />
    <h3>Figure 4: The wiring of my UART connections</h3>

    <br /><br />
    There were a few important things I realized while setting this up. One, the CH_PD pin must be
    pulled high for the chip to work at all. Two, if the RST pin is pulled low, the chip will reset.
    So this should be attached to a switch or to Vcc if we don't want to program the chip. Leaving
    it floating could result in random resets. We will decide on what we want to do with this pin
    when we figure out exactly what the code will do.
    <br /><br />
    Based on the datasheet for the chip (found
    <a
      href="https://www.espressif.com/sites/default/files/documentation/0a-esp8266ex_datasheet_en.pdf"
      >here</a
    >) there are two UART buses, but one is only TX. I think we need two-way communication for our
    project so we will use UART0 which has both TX and RX. <br /><br />
    Once the wiring was in place, I began to work on programming the device.
    <a href="https://tttapa.github.io/ESP8266/Chap05%20-%20Network%20Protocols.html">This</a>
    tutorial was very useful with diagrams and explanations of how the chip worked. We want to
    program our device using AT commands so the code that that guide uses is not super relevant
    because it needs to be flashed onto the chip. AT commands are read from the UART bus and allow
    dynamic configuration of the module. For our project we will send AT commands across our UART
    bus to configure the device when it boots. <br /><br />
    My initial attempts to run AT commands didn't result in much. Every command was met with an
    ERROR. That was a useful start because it told me that the baud rate was correct and that the
    wifi module was receiving data, but I wasn't able to do anything. After reading a lot of forums,
    I discovered that the return character for commands in the terminal (I was using Tera Term) need
    to be CR + LF whereas the default configuration was just CR. Even after changing this, I still
    was unable to get a valid response from the AT commands. Thankfully I found a random suggestion
    that said to try using CTRL+M to send commands. This suddenly made my commands work! I'm not
    sure what exactly CTRL+M does so when we configure our microcontroller to send the commands, we
    will need to see if the controller responds properly or not.
    <br /><br />
    But, once I got the commands to respond correctly, I could start testing functionality. Using
    the list of AT commands I found
    <a href="http://woodsgood.ca/projects/wp-content/uploads/ESP8266ATCommandsSet.pdf">here</a>, I
    began to experiment with different configurations. I noticed that the serial port does not allow
    for mistakes so every time I mistyped a command, I had to start the command over. I set up a
    hotspot on my laptop for testing purposes and using the AT+CWJAP command I was able to get the
    device to connect:

    <img style="max-width: 100%" src="@/assets/project/senior-design/wifi_conn.png" />
    <h3>
      Figure 5: Demonstration of the Tera Term terminal beside the connected device in Windows
    </h3>

    <br />
    This was very exciting because I had spent a long time not getting anything useful to happen.
    What allowed me to connect was that I used the AT+CWMODE command to change the modules mode from
    AP to client. Then I was able to connect to a wifi network as expected. And to verify that it
    was actully connected I ran AT+CIFSR to print the network information. Finally I pinged the
    module from my laptop and successfully got a response!

    <img style="max-width: 100%" src="@/assets/project/senior-design/wifi_ping.png" />
    <h3>Figure 6: Demonstration of a successful ping to the ESP8266</h3>

    <br />
    This point sets us up well for next week as we look towards the finalization of our PSSC's. We
    should have all our hardware figured out by next Friday.

    <br /><br /><br />
    <h4>Week 3:</h4>
    <b>Date:</b> 01/26/2023<br />
    <b>Total hours:</b> 11.5<br />
    <b>Description of project design efforts:</b><br />

    <h5><b>Wifi Research (2 hours): </b></h5>
    This week I researched different wifi modules to use for the display connections. Zack found a
    chip called the ATWINC1500 which provides the functionality we are interested in. I found a
    design guide for it that discusses the modes and how to configure it. That guide is
    <a
      href="https://engineering.purdue.edu/477grp5/Files/refs/atmel-42420-winc1500-software-design-guide_userguide.pdf"
      >here.</a
    >
    One of the sections of particular interest is on using the device in AP Mode. The AP mode would
    allow us to host a WiFi network off of this chip and connect peripherals to it. That would be
    extremely useful because we could then transmit data from the controller module to the LED
    modules. The flowchart for data is in the next image.
    <img style="max-width: 100%" src="@/assets/project/senior-design/AP_mode_WINC1500.png" />

    It seems that this chip would work well for our purposes but would also have a lot of
    configuration. The biggest caviate is that this module only supports one station at a time in AP
    mode. This would likely mean switching back and forth between LED modules. More prototyping is
    needed to determine if this is feasible or not. <br />

    Another feature of the WiFi module is that it can be run as a UDP server. Our system will use
    UDP because we do not care about any sort of validation from the LED modules. We can assume that
    data was properly transmitted once a connection is established. Section 6.4.4 of the document
    gives example code for this mode of operation.

    <br />
    <h5><b>LED Testing (3.5 hours): </b></h5>
    I spent a substantial amount of time testing a sample strip of LEDs with WS2812b controllers in
    them. I considered how to power them and decided that, based on the datasheet, the 3.3 V output
    from the ESP32 is sufficient to drive the data line high. (0.3VDD is the cutoff). After trying a
    tutorial found
    <a
      href="https://randomnerdtutorials.com/micropython-ws2812b-addressable-rgb-leds-neopixel-esp32-esp8266/"
      >here
    </a>
    I could not get the lights to work. After verifying successful traces on the oscilloscope, I
    decided that it was likely a clock speed issue. So, I verified that the Micropython function was
    configured to the right speed. At this point the lights still didn't work so I procured another
    strand and finally I got an output. It seems that a lot of my time was wasted because I was
    working with faulty hardware. Still, once the lights turned on, I had some fun making differnt
    color patters.
    <img style="max-width: 60%" src="@/assets/project/senior-design/light_code_mpy.png" />

    <h5><b>Research for Designing PWM (1 hour):</b></h5>
    In considering the LED's we want to use, PWM is a very important element. The concept of varying
    a duty cycle is what drives the LED's we use. I found a very useful guide
    <a
      href="https://deepbluembedded.com/stm32-change-pwm-duty-cycle-with-dma-for-sine-wave-generation/"
    >
      here</a
    >
    that explained how to set up PWM. One particularly useful element was a chart of a sine wave
    that helped me conceptualize what changing the duty cycle would do. Seeing how the duty cycle
    gradually changed from 50% to 100% to 0% as the value of the sine wave went up and down
    significantly helped me understand what was going on. This intuition carried over into our C
    code to drive PWM.
    <img style="max-width: 100%" src="@/assets/project/senior-design/pwm_sinwav.png" />

    <h5><b>LED Driver Design (5 hours): </b></h5>
    After spending a few hours researching the internal workings of the micro python library (to
    little success), I started working with Luke and Zack on getting the LED strip to work in C. The
    first challenge was with timing. The first thing we did was revisit some code from ECE 362 to
    configure timers on the STM32. That was a very useful resource. From this starting point, we got
    the STM32 dev board working with TIM1. At this point, our goal was to configure PWM. This proved
    rather simple based on the configuration we took from the ECE362 code. Based on the data sheet
    of the WS2812b chip, a signal of 0.4uS high followed by 0.85uS high represents a 0 and a signal
    of 0.8uS high followed by 0.45uS low represents a 1. To enable this timing with the STM32, we
    set the TIM1-&gt;ARR register to 60 (technically 59 because the MC adds 1). Using this value,
    the 64% duty cycle for a 1 corresponds to a 38, and the 32% duty cycle of a 0 corresponds to a
    19. In our C code I added these values for easy reference. With this functionality in place we
    started driving the output pin.
    <img style="max-width: 100%" src="@/assets/project/senior-design/basic_duty_cycle.jpg" />
    This second image shows the varying duty cycle between a series of 1's and 0's. The right side
    of the image shows 8 1's in a row and the middle of the screen shows 16 0's.
    <img style="max-width: 100%" src="@/assets/project/senior-design/transmit_pwm.jpg" />
    Despite successfully varying the duty cycle relatively quickly, successfully writing to the
    LED's proved particularly challenging. The challenge we had to overcome was ultimately a
    misunderstanding of how the WS2812's work. In effect, we wrote data that we thought should vary
    the color of the LED's to the pin that they were connected to. However, we basically just got a
    constant color output from the lights. The problem was that the lights wait for a low signal to
    actually set their values. We managed to send a repeating pattern of 1s and 0s but we never sent
    the stop condition that would let the LED's write their data. As such we were significantly
    slowed down. Eventually however, we did successfully send data to the strip. We configured an
    interrupt to update what array we read from each time it fires. That allowed us to do basic
    color switching along a strip.
    <img style="max-width: 100%" src="@/assets/project/senior-design/C_LED_success.jpg" />

    <br /><br /><br />
    <h4>Weeks 1-2:</h4>
    <b>Date:</b> 01/20/2023 <br />
    <b>Total hours:</b> 10<br />
    <b>Description of project design efforts:</b><br />
    <h5><b>Website Designing:</b></h5>
    This week I worked on setting up the website. First I mapped the drive to my computer using the
    tutorial provided on Brightspace. Once mapped, I used the drive to modify the template files for
    our website. A few of the files needed the 'base' tag updated so the site was not displaying
    properly initially. Once that was fixed, the site looked good so I began to populate it with
    various information including
    <a href="https://engineering.purdue.edu/477grp5/Files/refs/WS2812B.pdf">this</a>
    datasheet. <br /><br />

    <h5><b>Bluetooth Testing:</b></h5>
    Our project needs to communicate wirelessly between different modules. As such, we looked into
    different wireless protocols and decided to use Bluetooth to connect the phone and the main
    controller module. As a proof of concept, we set up a test phone with a serial terminal and
    tried to get text an ESP32 to communicate with it using
    <a href="https://www.electronicshub.org/esp32-bluetooth-tutorial/">this</a> tutorial.
    <br />
    <br />

    <h5><b>Bluetooth protocol Research:</b></h5>
    This week I spent time researching the Bluetooth protocol and how it works. Based on
    <a
      href="https://software-dl.ti.com/lprf/simplelink_cc2640r2_latest/docs/blestack/ble_user_guide/html/ble-stack-3.x/overview.html"
      >this</a
    >
    link for a BLE stack there is a host and a controller. The Generic Access Profile defines what
    state a Bluetooth device is in. It can be an Advertising, Scanning, Initiating, or Connecting.
    The graphic below demonstrates the complete BLE stack. I am still learning what all goes into
    the stack and how each device should assemble the necessary communication packets.
    <br />
    <img style="max-width: 100%" src="@/assets/project/senior-design/BLE_stack.png" />

    <h5><b>LED Research: </b></h5>
    This week I researched different LED strips to use for the display. The two main options were
    individual LEDs that would need to be cut an soldered separately. The other option is LED strips
    that have individual controllers for each LED. Each controller is part of a daisy chain and
    passes data through the strip. This method adds complexity because it requires a dedicated data
    channel. However, the main advantage over more general LED strips is the reduced pin count.
    Using non-addressable LED's would require at least 2n pins for an nxn grid. However, the
    tradeoff is that a premade grid reduces the design complexity significantly. This would
    potentially eliminate a PSSC for our project. The LED grids we will likely use can be found
    <a
      href="https://www.amazon.com/BTF-LIGHTING-Individual-Addressable-Flexible-Controllers/dp/B088BTYJH6/ref=sr_1_4?crid=AL3L61RUYPGU&amp;keywords=ws2812%2Bled%2Bgrid&amp;qid=1674070923&amp;s=hi&amp;sprefix=ws2812%2Ctools%2C449&amp;sr=1-4&amp;th=1"
      >here.</a
    >
    <br />
  </div>
</div>
</template>

<style scoped>
.content {
  width: var(--content-max-width); 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left:2%;
  padding-right:2%;
  gap: 2px;
  li {
    list-style-type: disc;
  }
}
img {
  width: 70%;
}
</style>
