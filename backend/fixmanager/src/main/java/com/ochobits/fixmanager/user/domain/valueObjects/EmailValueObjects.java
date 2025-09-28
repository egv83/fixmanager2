package com.ochobits.fixmanager.user.domain.valueObjects;

import java.util.Objects;
import java.util.regex.Pattern;

public class EmailValueObjects {

    private final String value;

    private static final Pattern EMAIL_PATTERN =
            Pattern.compile("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$");

    public EmailValueObjects(String value) {
        if (value == null || !EMAIL_PATTERN.matcher(value).matches()) {
            throw new IllegalArgumentException("Invalid email address");
        }
        this.value = value.toLowerCase();
    }

    public String getValue() {
        return value;
    }

    // Los ValueObjects deben tener equals y hashCode basados en valor
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof EmailValueObjects)) return false;
        EmailValueObjects emailValueObjects = (EmailValueObjects) o;
        return Objects.equals(value, emailValueObjects.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }

    @Override
    public String toString() {
        return value;
    }

}
