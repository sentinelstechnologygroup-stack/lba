const STORAGE_KEY = "lba_demo_user";

const wait = (ms = 350) => new Promise((resolve) => setTimeout(resolve, ms));

export const authClient = {
  async loginViaEmailPassword(email) {
    await wait();
    const user = { email, role: "member", name: email?.split("@")[0] || "Link Member" };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    return user;
  },

  async register({ email }) {
    await wait();
    return { email, status: "pending_verification" };
  },

  async verifyOtp({ email }) {
    await wait();
    const user = { email, role: "member", name: email?.split("@")[0] || "Link Member" };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    return { user };
  },

  async resendOtp() {
    await wait();
    return { ok: true };
  },

  async resetPasswordRequest() {
    await wait();
    return { ok: true };
  },

  async resetPassword() {
    await wait();
    return { ok: true };
  },

  async loginWithProvider(provider = "google", redirectTo = "/") {
    await wait();
    const user = { email: `${provider}-member@example.com`, role: "member", name: "Link Member" };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    window.location.href = redirectTo;
  },

  async me() {
    await wait(100);
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) throw new Error("Not authenticated");
    return JSON.parse(raw);
  },

  logout() {
    localStorage.removeItem(STORAGE_KEY);
  }
};
