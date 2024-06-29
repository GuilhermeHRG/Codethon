const crypto = require("crypto");

function criptografarId(id) {
  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    crypto.randomBytes(32),
    crypto.randomBytes(16)
  );
  let crypted = cipher.update(id.toString(), "utf8", "hex");
  crypted += cipher.final("hex");
  return crypted;
}

function descriptografarId(criptografado) {
  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    crypto.randomBytes(32),
    crypto.randomBytes(16)
  );
  let decrypted = decipher.update(criptografado, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return parseInt(decrypted, 10);
}

module.exports = {
  criptografarId,
  descriptografarId,
};