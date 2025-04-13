import Link from "next/link"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ContactList } from "@/components/contact-list"

export default function ContactsPage() {
  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Contacts</h2>
        <div className="flex items-center gap-2">
          <Link href="/dashboard/contacts/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Contact
            </Button>
          </Link>
        </div>
      </div>
      <ContactList />
    </div>
  )
}
