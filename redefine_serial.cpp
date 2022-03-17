#include "pxt.h"

namespace redefine_serial {
    void write_serial_hex(int data_hex)
    {
        uBit.serial.send(data_hex);
    }

}