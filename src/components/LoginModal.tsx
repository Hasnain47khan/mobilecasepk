import type { Dispatch, SetStateAction } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs"
import { buttonVariants } from "./ui/button"

const LoginModal = ({isOpen, setIsOpen}:{
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>

})=>{    
  return <Dialog onOpenChange={setIsOpen} open={isOpen}>
    <DialogContent className="absolute z-[9999999]">
        <DialogHeader>

        </DialogHeader>
        <DialogTitle className="text-3xl text-center font-bold tracking-tight text-gray-900">
            Login To Continue

        </DialogTitle>
        <DialogDescription className="text-base text-center py-2">
            <span className="font-medium text-zinc-900">
                Your Configuration was saved!
            </span>{' '}
            Please Login or create account to complete your purchase..

        </DialogDescription>
        <div className="grid grid-cols-2 gap-6 divide-x divide-gray-200">
            <LoginLink className={buttonVariants({variant:'outline'})} >Login</LoginLink>
            <RegisterLink className={buttonVariants({variant:'default'})}>Sign Up</RegisterLink>
        </div>
    </DialogContent>
  </Dialog>
}

export default LoginModal
