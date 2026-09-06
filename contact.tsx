import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { Textarea } from "./textarea";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { site } from "./site";

// Web3Forms access key. Public by design - it only lets a form post to the
// inbox it was created for. Get one free at https://web3forms.com (no account,
// just confirm your email) and paste it here.
const WEB3FORMS_ACCESS_KEY = "ed35427f-fe76-49bf-9a1b-4d9c7c5ceca8";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const empty: FormState = { name: "", email: "", phone: "", message: "" };

export function Contact() {
  const [form, setForm] = useState<FormState>(empty);
  const [formKey, setFormKey] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (form.name.trim().length < 2) {
      toast.error("Please add your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please add a valid email.");
      return;
    }
    if (form.message.trim().length < 12) {
      toast.error("Tell me a little more about the inquiry.");
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New inquiry from ${form.name.trim()} - ${site.name}`,
          from_name: site.name,
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
          botcheck: "",
        }),
      });
      const result = (await response.json()) as { success?: boolean };
      if (!response.ok || !result.success) {
        throw new Error("submit failed");
      }
      setForm(empty);
      setFormKey((key) => key + 1);
      toast.success("Message received. I\u2019ll follow up shortly.");
    } catch {
      toast.error("Could not send the message. Email directly instead.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-wash py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Contact"
              title="If it is a deal, a partnership, or a street we need to take over."
            />
            <p className="mt-6 max-w-md text-lede text-muted-foreground">
              Off-market deals, investment consultations, and partnership
              questions. Use the form to get in contact, response in less than 24
              hours or my direct line is below.
            </p>
            <ul className="mt-10 divide-y divide-rule rounded-lg border border-border bg-card">
              <li className="p-5">
                <p className="label-mono text-subtle">Email</p>
                <a
                  href={site.emailHref}
                  className="mt-2 block text-foreground transition-colors duration-quick ease-smooth hover:text-accent"
                >
                  {site.email}
                </a>
              </li>
              <li className="p-5">
                <p className="label-mono text-subtle">Phone</p>
                <a
                  href={site.phoneHref}
                  className="mt-2 block text-foreground transition-colors duration-quick ease-smooth hover:text-accent"
                >
                  {site.phone}
                </a>
              </li>
              <li className="p-5">
                <p className="label-mono text-subtle">Office</p>
                <p className="mt-2 text-foreground">{site.address}</p>
              </li>
            </ul>
          </div>

          <form
            key={formKey}
            onSubmit={onSubmit}
            className="rounded-lg border border-border bg-card p-6 sm:p-8 lg:col-span-7"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  required
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, phone: e.target.value }))
                  }
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  required
                />
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-subtle">
                Direct email also works -{" "}
                <a
                  href={site.emailHref}
                  className="text-foreground hover:text-accent"
                >
                  {site.email}
                </a>
              </p>
              <Button type="submit" disabled={submitting}>
                {submitting ? "Sending…" : "Send Message"}
              </Button>
            </div>

            <div className="mt-8 border-t border-rule pt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3214.2749466497953!2d-119.30014460000001!3d36.3298857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80952faa5888361d%3A0x404fb85892fcdb84!2sHouse%20Junkies%20Inc.!5e0!3m2!1sen!2sus!4v1788719427287!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: "0px" }}
                allowFullScreen
              />
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
