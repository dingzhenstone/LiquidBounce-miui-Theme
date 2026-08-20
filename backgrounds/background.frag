#version 330

// Uniforms
layout(std140) uniform ThemeBackgroundData {
    float time;
    vec2 mouse;
    vec2 resolution;
};

// Output color
out vec4 fragColor;

// Simple hash function
float hash(float n) {
    return fract(sin(n) * 43758.5453);
}

// 2D noise function
float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
    mix(hash(i.x + hash(i.y)), hash(i.x + 1.0 + hash(i.y)), u.x),
    mix(hash(i.x + hash(i.y + 1.0)), hash(i.x + 1.0 + hash(i.y + 1.0)), u.x),
    u.y
    );
}

// HyperOS style: deep gray base + soft blue radial glow + faint vignette
void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    float aspect = resolution.x / resolution.y;

    // Base: Miuix background #242424
    vec3 col = vec3(0.141, 0.141, 0.141);

    // Central blue glow (HyperOS light blue #4da6ff), slightly above center
    // Liquid glass needs visible light behind the frosted panels
    vec2 glowCenter = vec2(0.5, 0.42);
    vec2 d = (uv - glowCenter) * vec2(aspect, 1.0);
    float glow = exp(-length(d) * 2.8);
    glow *= 0.85 + 0.15 * sin(time * 0.5);

    // Secondary cool top light
    vec2 dTop = (uv - vec2(0.5, 1.25)) * vec2(aspect, 1.0);
    float topLight = exp(-length(dTop) * 4.6) * 0.10;

    // Very subtle film grain
    float grain = (noise(uv * resolution.xy / 900.0) - 0.5) * 0.008;

    vec3 blue = vec3(0.302, 0.651, 1.0);         // #4da6ff
    vec3 sky = vec3(0.55, 0.78, 1.0);
    col += blue * glow * 0.20;
    col += sky * topLight;
    col += vec3(grain);

    // Soft vignette
    float vig = 1.0 - 0.18 * length(uv - 0.5) * 1.4;
    col *= vig;

    fragColor = vec4(col, 1.0);
}
