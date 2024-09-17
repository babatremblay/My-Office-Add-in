/* global Office */

export async function fetchAttachments() {
  try {
    // Get attachments from the currently selected email
    const attachments = Office.context.mailbox.item.attachments;
    return attachments.map(attachment => ({
      name: attachment.name,
      size: attachment.size,
    }));
  } catch (error) {
    console.error("Failed to fetch attachments:", error);
    return [];
  }
}
