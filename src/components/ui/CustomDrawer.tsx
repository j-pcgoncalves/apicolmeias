import { 
    Drawer, 
    DrawerOverlay, 
    DrawerContent,
    DrawerHeader,
    IconButton
} from "@chakra-ui/react";
import { FaX } from "react-icons/fa6";

type CustomDrawerProps = {
    onClose: () => void;
    isOpen: boolean;
}

export default function CustomDrawer({ onClose, isOpen }: CustomDrawerProps) {
    return (
        <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
        >
            <DrawerOverlay />

            <DrawerContent>
                <DrawerHeader className="flex justify-end">
                    <IconButton 
                        aria-label="Close Drawer"
                        colorScheme="primary"
                        isRound={true}
                        fontSize="20px"
                        icon={<FaX />}
                        onClick={onClose}
                        _focusVisible={{ boxShadow: "unset" }}
                    />
                </DrawerHeader>

                <div className="drawer-items">
                    <span>Home</span>
                </div>
                <div className="drawer-items">
                    <span>Produtos</span>
                </div>
                <div className="drawer-items">
                    <span>Contactos</span>
                </div>
            </DrawerContent>
        </Drawer>
    );
}